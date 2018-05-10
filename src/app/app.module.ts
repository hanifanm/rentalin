import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { UserService } from './model/user.service';
import { ServiceService } from './model/service.service';
import { CarService } from './model/car.service';
import { GuideService } from './model/guide.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { ServiceComponent } from './service/service.component';
import { CarComponent } from './car/car.component';
import { GuideComponent } from './guide/guide.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    UserComponent,
    ServiceComponent,
    CarComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    ServiceService,
    CarService,
    GuideService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
