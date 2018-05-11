import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './model/login.service';

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

  getApplicationPath() {
    return '/app/user';
  }

}
