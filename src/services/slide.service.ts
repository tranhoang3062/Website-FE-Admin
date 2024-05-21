import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: "root"
})
export class SlideService {  

    constructor(
        private apiService: ApiService,
    ) {
    }

    getList(filters?: any) {
        return this.apiService.getData('/admin/slide/list', filters);
    }

    showById(id: any) {
        return this.apiService.getData(`/admin/slide/show/${id}`, {});
    }

    createSlide(data: any) {
        return this.apiService.postData('/admin/slide/create', data);
    }

    updateSlide(id: any, data: any) {
        return this.apiService.putData(`/admin/slide/edit/${id}`, data);
    }

    deleteSlide(id: any) {
        return this.apiService.deleteData(`/admin/slide/delete/${id}`);
    }

}
