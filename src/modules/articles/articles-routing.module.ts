import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { ArticlesModule } from './articles.module';
import { ArticlesComponent } from './articles.component';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Article',
            breadcrumbs: [
                {
                    text: 'Article',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: ArticlesComponent,
    },
];

@NgModule({
    imports: [ArticlesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ArticlesRoutingModule {}
