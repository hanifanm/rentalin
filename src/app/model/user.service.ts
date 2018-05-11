import { Injectable } from '@angular/core';
import * as data from './data';

let users = data.users;

export class UserModel {
  id : number;
  name : string;
  email : string;
  password : string;
  level : number;

  constructor(id : number, name : string, email : string, password : string, level : number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.level = level;
  }

  get role() : string {
    if(this.level === 1) return 'Superadmin';
    else if(this.level === 2) return 'Vendor';
    else return 'User';
  }

}

@Injectable()
export class UserService {

  collections : UserModel[] = [];
  current : UserModel = undefined;

  constructor() { }

  fetch() {
    this.collections = [];
    for(let i=0; i<users.length; i++) {
      let user = new UserModel(users[i].id, users[i].name, users[i].email, users[i].password, users[i].level);
      this.collections.push(user);
    }
  }


  delete(id : number) {
    let i = 0;
    while(i<users.length && users[i].id !== id) i++;
    users.splice(i, 1);
  }

  update(id : number, name : string, email : string, password : string, level : number) {
    let i = 0;
    while(i<users.length && users[i].id !== id) i++;
    users[i].name = name;
    users[i].email = email;
    users[i].password = password;
    users[i].level = level;
  }

  create(id : number, name : string, email : string, password : string, level : number) {
    
    let max = 0;
    for(let i=0; i<users.length; i++) {
      if(users[i].id > max) max = users[i].id;
    }

    let newUsers = {
      id : max + 1,
      name : name,
      email : email,
      password : password,
      level : level
    };

    users.push(newUsers);
  }

}
