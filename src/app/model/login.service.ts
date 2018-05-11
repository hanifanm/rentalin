import { Injectable } from '@angular/core';
import * as data from './data';

const key = 'loginuser';

@Injectable()
export class LoginService {

  user = {
    id : 0,
    email : '',
    name : '',
    level : 0
  };

  isLogin = false;
  lastError : string = '';

  constructor() {
    let user = window.localStorage.getItem(key);
    try {
      let savedUser = JSON.parse(user);
      this.user.id = savedUser.id;
      this.user.email = savedUser.email;
      this.user.name = savedUser.name;
      this.user.level = savedUser.level;
      this.isLogin = true;
    } catch(e) {

    }
  }

  login(email : string, password : string) {
    this.lastError = '';

    for(let i=0; i<data.users.length; i++) {
      if(data.users[i].email === email) {
        if(data.users[i].password === password) {

          this.user.id = data.users[i].id;
          this.user.email = data.users[i].email;
          this.user.name = data.users[i].name;
          this.user.level = data.users[i].level;
          window.localStorage.setItem('loginuser', JSON.stringify(this.user));
          this.isLogin = true;
          return;

        } else {
          this.lastError = 'Wrong Password';
          this.isLogin = false;
          return;
        }
      }
    }
    this.isLogin = false;
    this.lastError = 'User Not Found'
    return;
  }

  logout() {
    this.isLogin = false;
    this.user.id = 0;
    this.user.name = '';
    this.user.email = '';
    this.user.level = 0;
    window.localStorage.removeItem(key);
  }

  get role() : string {
    if(this.user.level === 1) return 'Superadmin';
    else if(this.user.level === 2) return 'Vendor';
    else if(this.user.level === 3) return 'User';
    else return 'Guest'
  }

}
