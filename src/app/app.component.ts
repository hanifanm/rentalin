import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './model/login.service';
import { ROLE_SUPERADMIN, ROLE_VENDOR, ROLE_USER } from './model/const'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isDialogLogin : boolean = false;
  email : string = '';
  password : string = '';
  error : string = '';

  constructor(
    private loginService : LoginService,
    private router : Router
  ) { }

  ngOnInit() {
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
    this.loginService.logout();
    if(!this.loginService.isLogin) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  onCloseDialog() {
    this.isDialogLogin = false;
  }

  onLogin() {
    this.loginService.login(this.email, this.password);
    if(this.loginService.isLogin) {
      this.onCloseDialog();
      this.router.navigateByUrl(this.getApplicationPath());
    } else {
      this.error = this.loginService.lastError;
    }
  }

  getApplicationPath() : string {
    switch(this.loginService.user.level) {
      case ROLE_SUPERADMIN : {
        return '/app/user';
      }
      case ROLE_VENDOR : {
        return '/app/interaction';
      }
      case ROLE_USER : {
        return '/app/interaction';
      }
      default : {
        return '/dashboard';
      }
    }
  }

}
