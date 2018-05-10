import { Component, OnInit } from '@angular/core';
import { UserService, UserModel } from '../model/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : UserModel[] = [];

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onView(user : UserModel) {
    console.log(user);
  }

  onDelete(user : UserModel) {
    console.log(user);
  }

}
