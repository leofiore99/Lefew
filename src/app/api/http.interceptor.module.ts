import { NgModule, Injectable, Inject } from '@angular/core';
import { InterceptedResponse, InterceptorService, Interceptor, InterceptedRequest } from 'ng2-interceptors';
import { XHRBackend, RequestOptions } from '@angular/http';

export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, serverURLInterceptor: ServerURLInterceptor) {
    let service = new InterceptorService(xhrBackend, requestOptions);
    service.addInterceptor(serverURLInterceptor);
    return service;
}

export class ServerURLInterceptor implements Interceptor {
    constructor(
    ) { }

    public interceptBefore(request: InterceptedRequest): InterceptedRequest {
        request.options.headers.append("Accept-Language", navigator.language);
        return request;
    }

    public interceptAfter(response: InterceptedResponse): InterceptedResponse {
        if (response.response.status == 0) alert('Erro na API: Status 0');
        return response;
    }
}

@NgModule({
    providers: [
        ServerURLInterceptor,
        {
            provide: InterceptorService,
            useFactory: interceptorFactory,
            deps: [XHRBackend, RequestOptions, ServerURLInterceptor]
        }
    ]
})
export class HttpInterceptorModule { }

