import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
    },
    {
        path: 'charts',
        loadChildren: () =>
            import('modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule),
    },
    {
        path: 'categories',
        loadChildren: () =>
            import('modules/categories/categories-routing.module').then(m => m.CategoriesRoutingModule),
    },
    {
        path: 'products',
        loadChildren: () =>
            import('modules/products/products-routing.module').then(m => m.ProductsRoutingModule),
    },
    {
        path: 'users',
        loadChildren: () =>
            import('modules/users/users-routing.module').then(m => m.UsersRoutingModule),
    },
    {
        path: 'slides',
        loadChildren: () =>
            import('modules/slides/slides-routing.module').then(m => m.SlidesRoutingModule),
    },
    {
        path: 'articles',
        loadChildren: () =>
            import('modules/articles/articles-routing.module').then(m => m.ArticlesRoutingModule),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
