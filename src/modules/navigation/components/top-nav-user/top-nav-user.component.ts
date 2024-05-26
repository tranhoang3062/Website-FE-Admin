import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {

    lang: any;

    constructor(
        public userService: UserService,
        private translate: TranslateService
    ) {
        this.lang = localStorage.getItem('lang');
    }
    ngOnInit() { }

    switchLanguage(lang: any) {
        this.lang = lang;
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
        window.location.reload();
    }
}
