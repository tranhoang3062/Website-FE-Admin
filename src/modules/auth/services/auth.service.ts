import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { ApiService } from 'services/api.service';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
        private apiService: ApiService,
    ) {}

    getAuth$(): Observable<{}> {
        return of({});
    }    

    getItem(key: any) {
        return localStorage.getItem(key);
    }

    login(data: any) {
        let account = { username: 'hoangnguyen', password: '123456789' };
        return this.http.post(environment.apiUrl + '/auth/login', account);
    }
}
