import { Injectable, Inject } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { InterceptorService } from 'ng2-interceptors';
import { ContentType } from '@angular/http/src/enums';

@Injectable()
export class HttpService {

    private headers: Headers;
    private options: RequestOptions;
    private token: any;

    constructor(
        public http: InterceptorService) { }

    private getRequestOptions(contentType?: string, responseType?: string) {
        if (typeof window !== 'undefined') {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser != null) {
                this.token = currentUser.token;
            }

            const headers = new Headers();
            headers.append('Content-Type', contentType);
            // headers.append('Authorization', `bearer ` + this.token);
            this.options = new RequestOptions({ headers: headers });
            return this.options;
        }
    }

    private getRequestOptionsFile() {
        if (typeof window !== 'undefined') {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser != null) {
                this.token = currentUser.token;
            }

            const headers = new Headers();
            headers.append('Authorization', `bearer ` + this.token);
            this.options = new RequestOptions({ headers: headers });
            return this.options;
        }
    }

    protected _get(method: string, contentType: string) {
        return this.http.get(method, this.getRequestOptions(contentType)).map((res) => res.json());
    }

    protected _getFile(method: string) {
        return this.http.get(method, this.getRequestOptionsFile());
    }

    protected _post(obj: any, method: string, contentType: string) {
        return this.http.post(method, obj, this.getRequestOptions(contentType)).map((res) => res.json());
    }

    protected _postFile(obj: any, method: string) {
        return this.http.post(method, obj, this.getRequestOptionsFile());
    }
    protected _put(obj: any, method: string, contentType: string) {
        return this.http.put(method, obj, this.getRequestOptions(contentType));
    }

    protected _patch(obj: any, method: string, contentType: string) {
        return this.http.patch(method, obj, this.getRequestOptions(contentType));
    }

    protected _patchFile(obj: any, method: string) {
        return this.http.patch(method, obj, this.getRequestOptionsFile());
    }

    protected _delete(method: string, contentType: string) {
        return this.http.delete(method, this.getRequestOptions(contentType)).map((res) => res.json());
    }
}

