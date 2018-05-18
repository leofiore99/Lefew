import { Injectable, Inject } from '@angular/core';
import { HttpBaseService } from '../api/http.base.service';
import { InjectorHttpService } from '../api/http.injector.service';

@Injectable()

export class HomeService extends HttpBaseService {
    constructor(@Inject(InjectorHttpService) public injectorHttpService: InjectorHttpService) {
        super(injectorHttpService);
    }

    // Register
    // public getRegister() {
    //     const resource = 'Register';
    //     return this.get(resource);
    // }

    public SendEmail(model: any) {
        const resource = 'Distributor';
        return this.post(resource, model);
    }

    // // Company
    // public getCompany() {
    //     const resource = 'Company/Domain';
    //     return this.get(resource);
    // }

    // public AddCompanyWithFile(formData: FormData) {
    //     const resource = 'Company';
    //     return this.postFile(resource, formData);
    // }

    // public updateCompanyWithFile(formData: FormData) {
    //     const resource = 'Company';
    //     return this.patchFile(resource, formData);
    // }

    // // Profile
    // public getPeople() {
    //     const resource = 'Person?page=1&perPage=10';
    //     return this.get(resource);
    // }

    // public getPerson() {
    //     const resource = 'Person/Email';
    //     return this.get(resource);
    // }

    // public updatePersonWithFile(formData: FormData) {
    //     const resource = 'Person';
    //     return this.patchFile(resource, formData);
    // }

    // // Position
    // public GetPositions() {
    //     const resource = 'Position?page=1&perPage=30';
    //     return this.get(resource);
    // }

    // public AddPosition(model: any) {
    //     const resource = 'Position';
    //     return this.post(resource, model);
    // }

    // public deletePosition(id: any) {
    //     const resource = 'Position/' + id;
    //     return this.delete(resource);
    // }

}

