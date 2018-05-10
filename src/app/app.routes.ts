import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { ServiceComponent } from './service/service.component';
import { CarComponent } from './car/car.component';
import { GuideComponent } from './guide/guide.component';

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
    }
    
]

export { appRoutes }