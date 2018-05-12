import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { UserService } from './model/user.service';
import { ServiceService } from './model/service.service';
import { CarService } from './model/car.service';
import { GuideService } from './model/guide.service';
import { LoginService } from './model/login.service';
import { CityService } from './model/city.service';
import { CarTypeService } from './model/car-type.service';
import { InteractionService } from './model/interaction.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { ServiceComponent } from './service/service.component';
import { CarComponent } from './car/car.component';
import { GuideComponent } from './guide/guide.component';
import { InteractionComponent } from './interaction/interaction.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    UserComponent,
    ServiceComponent,
    CarComponent,
    GuideComponent,
    InteractionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    ServiceService,
    CarService,
    GuideService,
    LoginService,
    CityService,
    CarTypeService,
    InteractionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
