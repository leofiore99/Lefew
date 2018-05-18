import { Injectable, Inject } from '@angular/core';
import { HttpService } from './http.service';
import { InjectorHttpService } from './http.injector.service';
import { APIConfig } from '../app.config';

@Injectable()
export abstract class HttpBaseService extends HttpService {

    private header = APIConfig.Header;
    protected urlBase = APIConfig.Header.Url.baseUrl;

    constructor(injectorHttpService: InjectorHttpService) {
        super(injectorHttpService.http);
    }

    get(resource: string) {
        return this._get(this.urlBase + resource, this.header.ContentType.json);
    }

    getFile(resource: string) {
        return this._getFile(this.urlBase + resource);
    }

    post(resource: string, obj: any) {
        return this._post(obj, this.urlBase + resource, this.header.ContentType.json);
    }

    postFile(resource: string, obj: any) {
        return this._postFile(obj, this.urlBase + resource);
    }

    put(resource: string, obj: any) {
        return this._put(obj, this.urlBase + resource, this.header.ContentType.json);
    }

    patch(resource: string, obj: any) {
        return this._patch(obj, this.urlBase + resource, this.header.ContentType.json);
    }

    patchFile(resource: string, obj: any) {
        return this._patchFile(obj, this.urlBase + resource);
    }

    delete(resource: string) {
        return this._delete(this.urlBase + resource, this.header.ContentType.json);
    }

    getError(error): string {
        switch (error) {
            case 409:
                return 'Já existem essas informações cadastradas (Conflict Request)';
            case 404:
                return 'Não foi encontrado o endereço especificado na API.';
            case 401:
                return 'Acesso negado.';
            case 400:
                return 'Há um erro na consulta da API (Bad Request).';
            case 403:
                return 'Desculpe, você nao tem acesso para esta operação. Contate um administrador.';
            default:
                return 'Um erro ocorreu.';
        }
    }

    // formatDate(date: any) {
    //     var dateFormatter = new NgbDateFRParserFormatter();

    //     return dateFormatter.formatInsert(date);
    // }

    // parseDate(date: string) {
    //     var dateFormatter = new NgbDateFRParserFormatter();

    //     return dateFormatter.parseShow(date);
    // }
}
