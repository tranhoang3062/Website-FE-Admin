/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { SlidesComponent } from './slides.component';
import { AppCommonModule } from '@common/app-common.module';

@NgModule({
    declarations: [SlidesComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        NavigationModule,
        AppCommonModule,
    ],
    exports: [SlidesComponent]
})
export class SlidesModule {}
