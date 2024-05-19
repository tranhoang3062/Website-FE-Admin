import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { SlidesModule } from './slides.module';
import { SlidesComponent } from './slides.component';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Slide',
            breadcrumbs: [
                {
                    text: 'Slide',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: SlidesComponent,
    },
];

@NgModule({
    imports: [SlidesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SlidesRoutingModule {}
