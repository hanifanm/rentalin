import { Component, OnInit } from '@angular/core';
import { ServiceService, ServiceModel } from '../model/service.service'
import { LoginService } from '../model/login.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  isDialogView : boolean = false;
  isDialogForm : boolean = false;
  isDialogDelete : boolean = false;
  error : string = '';

  constructor(
    private serviceService : ServiceService,
    private loginService : LoginService
  ) { }

  ngOnInit() {
    this.serviceService.fetch();
  }

  
  onView(service : ServiceModel) {
    this.serviceService.current = service;
    this.isDialogView = true;
  }

  onEdit() {
    this.onCloseDialog();
    this.error = '';
    let oldCurrent = this.serviceService.current;
    this.serviceService.current = new ServiceModel(
      oldCurrent.id,
      oldCurrent.user_id,
      oldCurrent.type,
      oldCurrent.name
    )
    this.isDialogForm = true;
  }

  onCreate() {
    this.onCloseDialog();
    this.error = '';
    this.serviceService.current = new ServiceModel(-1, 0, 0, '');
    this.isDialogForm = true;
  }

  onDelete(service : ServiceModel) {
    this.serviceService.current = service;
    this.isDialogDelete = true;
  }

  onSubmitDelete() {
    this.serviceService.delete(this.serviceService.current.id);
    this.serviceService.fetch();
    this.onCloseDialog();
  }

  onSubmitForm() {

    this.error = '';
    if(this.serviceService.current.type == 0) this.error = "Type must not be empty";
    if(this.serviceService.current.name == '') this.error = "Name must not be empty";
    if(this.error != '') return;

    if(this.serviceService.current.id === -1) {
      this.serviceService.create(
        this.serviceService.current.id,
        this.loginService.user.id,
        parseInt(this.serviceService.current.type.toString()),
        this.serviceService.current.name
      );
    } else {
      this.serviceService.update(
        this.serviceService.current.id,
        parseInt(this.serviceService.current.type.toString()),
        this.serviceService.current.name
      );
    }

    this.serviceService.fetch();
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
