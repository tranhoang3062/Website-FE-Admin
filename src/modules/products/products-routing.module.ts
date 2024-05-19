import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { ProductsModule } from './products.module';
import { ProductsComponent } from './products.component';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Product',
            breadcrumbs: [
                {
                    text: 'Product',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: ProductsComponent,
    },
];

@NgModule({
    imports: [ProductsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ProductsRoutingModule {}
