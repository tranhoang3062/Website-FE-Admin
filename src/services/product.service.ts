import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: "root"
})
export class ProductService {  

    constructor(
        private apiService: ApiService,
    ) {
    }

    getList(filters?: any) {
        return this.apiService.getData('/admin/product/list', filters);
    }

    showById(id: any) {
        return this.apiService.getData(`/admin/product/show/${id}`, {});
    }

    createProduct(data: any) {
        return this.apiService.postData('/admin/product/create', data);
    }

    updateProduct(id: any, data: any) {
        return this.apiService.putData(`/admin/product/edit/${id}`, data);
    }

    deleteProduct(id: any) {
        return this.apiService.deleteData(`/admin/product/delete/${id}`);
    }

}
