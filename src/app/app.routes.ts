import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { ServiceComponent } from './service/service.component';
import { CarComponent } from './car/car.component';
import { GuideComponent } from './guide/guide.component';
import { InteractionComponent } from './interaction/interaction.component';

const appRoutes : Routes = [
    {
        path : 'dashboard',
        component : DashboardComponent
    },
    {
        path : 'app',
        component : LayoutComponent,
        children : [
            {
                path : 'interaction',
                component : InteractionComponent
            },
            {
                path : 'user',
                component : UserComponent
            },
            {
                path : 'service',
                component : ServiceComponent
            },
            {
                path : 'car',
                component : CarComponent
            },
            {
                path : 'guide',
                component : GuideComponent
            }
        ]
    },
    {
        path : '',
        redirectTo : 'dashboard',
        pathMatch : 'full'
    }
    
]

export { appRoutes }