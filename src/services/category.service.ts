import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: "root"
})
export class CategoryService {  

    constructor(
        private apiService: ApiService,
    ) {
    }

    getList(filters?: any) {
        return this.apiService.getData('/admin/category/list', filters);
    }

    showById(id: any) {
        return this.apiService.getData(`/admin/category/show/${id}`, {});
    }

    createCategory(data: any) {
        return this.apiService.postData('/admin/category/create', data);
    }

    updateCategory(id: any, data: any) {
        return this.apiService.putData(`/admin/category/edit/${id}`, data);
    }

    deleteCategory(id: any) {
        return this.apiService.deleteData(`/admin/category/delete/${id}`);
    }

}
