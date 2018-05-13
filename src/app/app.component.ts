import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './model/login.service';
import { UserService, UserModel } from './model/user.service';
import { ROLE_SUPERADMIN, ROLE_VENDOR, ROLE_USER } from './model/const';
import * as data from './model/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isDialogLogin : boolean = false;
  isDialogLoading : boolean = false;
  email : string = '';
  password : string = '';
  error : string = '';

  constructor(
    private loginService : LoginService,
    private userService : UserService,
    private router : Router
  ) {
    window['getData'] = () => {
      return {
        user : data.users,
        services : data.services,
        guides : data.guides,
        cars : data.cars,
        interactions : data.interactions
      }
    }
  }

  ngOnInit() {
    this.userService.fetch();
    let location = window.location.pathname;
    if(location !== '/dashboard' && !this.loginService.isLogin) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  onClickLogin() {
    this.isDialogLogin = true;
    this.email = '';
    this.password = '';
    this.error = '';
  }

  onClickLogout() {
    this.isDialogLoading = true;
    setTimeout(() => this.isDialogLoading = false, 1000);
    this.loginService.logout();
    if(!this.loginService.isLogin) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  onCloseDialog() {
    this.isDialogLogin = false;
  }

  onLogin() {
    this.isDialogLoading = true;
    setTimeout(() => this.isDialogLoading = false, 1000);
    this.loginService.login(this.email, this.password);
    if(this.loginService.isLogin) {
      this.onCloseDialog();
      this.router.navigateByUrl(this.getApplicationPath());
    } else {
      this.error = this.loginService.lastError;
    }
  }

  selectForceLogin(user : UserModel) {
    this.email = user.email;
    this.password = user.password;
  }

  getApplicationPath() : string {
    switch(this.loginService.user.level) {
      case ROLE_SUPERADMIN : {
        return '/app/user';
      }
      case ROLE_VENDOR : {
        return '/app/interaction';
      }
      default : {
        return '/dashboard';
      }
    }
  }

}
