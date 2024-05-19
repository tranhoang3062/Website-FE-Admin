/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { UsersComponent } from './users.component';
import { AppCommonModule } from '@common/app-common.module';

@NgModule({
    declarations: [UsersComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        NavigationModule,
        AppCommonModule,
    ],
    exports: [UsersComponent]
})
export class UsersModule {}
