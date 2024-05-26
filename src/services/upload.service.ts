import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";
import { ApiService } from './api.service';
import { environment } from 'environments/environment';
@Injectable({
    providedIn: 'root'
})
export class UploadService {
    baseUrl = environment.apiUrl;
    headers = new HttpHeaders({
        'Content-Type': 'application/json, *',
        'Accept': 'application/json, multipart/form-data',
    });

    constructor(
        private http: HttpClient,
        private apiService: ApiService) {
    }


    upload(file: any): Observable<any> {
        const headers = this.headers;
        const formData: FormData = new FormData();
        formData.append('file', file);
        return this.http.post(this.baseUrl + '/upload/image', formData, {})
            .pipe(catchError(error => error));
    }

    // uploadMultiImages(files: any): Observable<any> {
    //     const uploadData = new FormData();
    //     const headers = this.headers;
    //     if (files && files.length > 0) {
    //         files.forEach((file: File) => {
    //             uploadData.append('files[]', file);
    //         });
    //     }
    //     return this.http.post(this.baseUrl + '/multi-upload', uploadData, { headers })
    //         .pipe(catchError(error => error));
    // }

}
