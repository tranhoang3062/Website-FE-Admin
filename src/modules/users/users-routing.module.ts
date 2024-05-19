import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { UsersModule } from './users.module';
import { UsersComponent } from './users.component';

export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'User',
            breadcrumbs: [
                {
                    text: 'User',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: UsersComponent,
    },
];

@NgModule({
    imports: [UsersModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}
