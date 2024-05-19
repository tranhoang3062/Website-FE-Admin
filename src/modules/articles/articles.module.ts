/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { ArticlesComponent } from './articles.component';
import { AppCommonModule } from '@common/app-common.module';

@NgModule({
    declarations: [ArticlesComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        NavigationModule,
        AppCommonModule,
    ],
    exports: [ArticlesComponent]
})
export class ArticlesModule {}
