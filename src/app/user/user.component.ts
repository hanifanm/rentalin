import { Component, OnInit } from '@angular/core';
import { UserService } from '../model/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [];

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
