/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { CategoriesComponent } from './categories.component';
import { AppCommonModule } from '@common/app-common.module';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [CategoriesComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        NavigationModule,
        AppCommonModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        }),
        NgxDaterangepickerMd,
        NgxDaterangepickerMd.forRoot(),
        NgbPaginationModule
    ],
    exports: [CategoriesComponent]
})
export class CategoriesModule { }
