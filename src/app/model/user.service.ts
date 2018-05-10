import { Injectable } from '@angular/core';
import * as data from './data';

let users = data.users;

export class UserModel {
  id : Number;
  name : String;
  email : String;
  password : String;
  level : Number;

  constructor(id : Number, name : String, email : String, password : String, level : Number) {
    this.id = id;
    this.name = name;
    this.email = name;
    this.password = password;
    this.level = level;
  }

  get role() : String {
    if(this.level === 1) return 'Superadmin';
    else if(this.level === 2) return 'Vendor';
    else return 'User';
  }

}

@Injectable()
export class UserService {

  current : UserModel;

  constructor() { }

  getUsers() : UserModel[] {
    let collections : UserModel[] = [];
    for(let i=0; i<users.length; i++) {
      let user = new UserModel(users[i].id, users[i].name, users[i].email, users[i].password, users[i].level);
      collections.push(user);
    }
    return collections;
  }

}
