import { Component, OnInit } from '@angular/core';
import { UserService, UserModel } from '../model/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isDialogView : boolean = false;
  isDialogForm : boolean = false;
  isDialogDelete : boolean = false;
  error : string = '';

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.userService.fetch();
  }

  
  onView(user : UserModel) {
    this.userService.current = user;
    this.isDialogView = true;
  }

  onEdit() {
    this.onCloseDialog();
    this.error = '';
    let oldCurrent = this.userService.current;
    this.userService.current = new UserModel(
      oldCurrent.id,
      oldCurrent.name,
      oldCurrent.email,
      oldCurrent.password,
      oldCurrent.level
    )
    this.isDialogForm = true;
  }

  onCreate() {
    this.onCloseDialog();
    this.error = '';
    this.userService.current = new UserModel(-1, '', '', '', 0);
    this.isDialogForm = true;
  }

  onDelete(user : UserModel) {
    this.userService.current = user;
    this.isDialogDelete = true;
  }

  onSubmitDelete() {
    this.userService.delete(this.userService.current.id);
    this.userService.fetch();
    this.onCloseDialog();
  }

  onSubmitForm() {

    this.error = '';
    if(this.userService.current.level == 0) this.error = "Level must not be empty";
    if(this.userService.current.password == '') this.error = "Password must not be empty";
    if(this.userService.current.email == '') this.error = "Email must not be empty";
    if(this.userService.current.name == '') this.error = "Name must not be empty";
    if(this.error != '') return;

    if(this.userService.current.id === -1) {
      this.userService.create(
        this.userService.current.id,
        this.userService.current.name,
        this.userService.current.email,
        this.userService.current.password,
        this.userService.current.level
      );
    } else {
      this.userService.update(
        this.userService.current.id,
        this.userService.current.name,
        this.userService.current.email,
        this.userService.current.password,
        this.userService.current.level
      );
    }

    this.userService.fetch();
    this.onCloseDialog();
  }

  onCloseDialog() {
    this.isDialogView = false;
    this.isDialogForm = false;
    this.isDialogDelete = false;
  }

  onCloseError() {
    this.error = '';
  }
}
