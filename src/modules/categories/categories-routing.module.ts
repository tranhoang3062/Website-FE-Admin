import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { CategoriesModule } from './categories.module';
import { CategoriesComponent } from './categories.component';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Category',
            breadcrumbs: [
                {
                    text: 'Category',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: CategoriesComponent,
    },
];

@NgModule({
    imports: [CategoriesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CategoriesRoutingModule {}
