import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';

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
            }
        ]
    },
    
]

export { appRoutes }