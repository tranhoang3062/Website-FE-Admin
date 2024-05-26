import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {

    constructor(
        private authService: AuthService
    ) {

    }

    ngOnInit(): void {

    }

    login() {
        this.authService.login({}).subscribe((res: any) => {
            if (res.status == 'success') {
                console.log(res)
                localStorage.setItem('access_token', res.data.token_info.access_token);
                window.location.href = '/dashboard';
            }
        });
    }
}
