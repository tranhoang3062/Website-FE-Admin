import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { AlertService } from './alert.service';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    destroy$: Subject<void> = new Subject<void>();
    headers = new HttpHeaders({
        'Content-Type': 'application/json, *',
        'Accept': 'application/json, multipart/form-data',
    });

    apiHost = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private router: Router,
        private alertService: AlertService
    ) {
        const accessToken = localStorage.getItem('access_token');
        this.headers = new HttpHeaders({
            'Authorization': 'Bearer ' + accessToken
        });
    }

    /**
     * Send request by GET method and parse response to json.
     * @param {string} path - API url path.
     * @return {Observable<any>}
     */
    getData(path: string, filters: any): Observable<any> {
        let params = this.buildParams(filters);
        return this.http.get<any>(environment.apiUrl + path, { headers: this.headers, params: params }).pipe(
            takeUntil(this.destroy$),
            map(response => response),
            catchError(response => this.handleError(response))
        );
    }

    postData(path: string, data: any): Observable<any> {
        return this.http.post(environment.apiUrl + path, data, { headers: this.headers }).pipe(
            map(response => response),
            catchError(error => this.handleError(error))
        );
    }

    putData(path: string, data: any): Observable<any> {
        return this.http.put(environment.apiUrl + path, data, { headers: this.headers }).pipe(
            map(response => response),
            catchError(error => this.handleError(error))
        );
    }

    deleteData(path: string): Observable<any> {
        return this.http.delete<any>(environment.apiUrl + path, { headers: this.headers }).pipe(
            takeUntil(this.destroy$),
            map(res => res),
            catchError(response => this.handleError(response))
        );
    }


    handleError(error: Error): Observable<any> {
        this.alertService.fireSmall('error', error.message ? error.message : "Có lỗi xảy ra, vui lòng thử lại sau");
        return of(error);
    }

    buildParams(values: any) {
        let params = new HttpParams;
        if (values) {
            let arrCondition = Object.entries(values);
            arrCondition.forEach((element: any) => {
                if (element[1] != null) {
                    params = this.buildItemParam(element[0], element[1], params);
                }
            });
        }
        return params;
    }

    buildItemParam(key: string, value: string | number | string[] | number[] | any, params: HttpParams): HttpParams {
        if (key == 'page' && !value) {
            params = params.append(`${key}`, '0');
        }
        if (value) {
            if (Array.isArray(value)) {
                value.forEach((item: string | number | any) => {
                    params = params.append(`${key}[]`, item);
                });
                return params;
            }
            return params.append(`${key}`, value);
        }
        return params;
    }
}