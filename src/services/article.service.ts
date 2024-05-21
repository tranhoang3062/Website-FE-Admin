import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: "root"
})
export class ArticleService {  

    constructor(
        private apiService: ApiService,
    ) {
    }

    getList(filters?: any) {
        return this.apiService.getData('/admin/article/list', filters);
    }

    showById(id: any) {
        return this.apiService.getData(`/admin/article/show/${id}`, {});
    }

    createArticle(data: any) {
        return this.apiService.postData('/admin/article/create', data);
    }

    updateArticle(id: any, data: any) {
        return this.apiService.putData(`/admin/article/edit/${id}`, data);
    }

    deleteArticle(id: any) {
        return this.apiService.deleteData(`/admin/article/delete/${id}`);
    }

}
