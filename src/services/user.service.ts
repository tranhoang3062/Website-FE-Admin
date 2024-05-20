import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: "root"
})
export class UserService {  

    constructor(
        private apiService: ApiService,
    ) {
    }

    getList(filters?: any) {
        return this.apiService.getData('/admin/user/list', filters);
    }

    showById(id: any) {
        return this.apiService.getData(`/admin/user/show/${id}`, {});
    }

    createUser(data: any) {
        return this.apiService.postData('/admin/user/create', data);
    }

    updateUser(id: any, data: any) {
        return this.apiService.postData(`/admin/user/edit/${id}`, data);
    }

    deleteUser(id: any, data: any) {
        return this.apiService.postData(`/admin/user/delete/${id}`, data);
    }

}
