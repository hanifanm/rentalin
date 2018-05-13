import { Component, OnInit } from '@angular/core';
import { LoginService } from '../model/login.service';
import { ROLE_SUPERADMIN, ROLE_USER, ROLE_VENDOR } from'../model/const'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  tabs = [];

  constructor(
    private loginService : LoginService
  ) {
    if(loginService.user.level == ROLE_SUPERADMIN) {
      this.tabs = [
        { title : 'User', path : '/app/user' },
        { title : 'Service', path : '/app/service' },
        { title : 'Guide', path : '/app/guide' },
        { title : 'Car', path : '/app/car' }
      ]
    } else if(loginService.user.level == ROLE_VENDOR) {
      this.tabs = [
        { title : 'Interaction', path : '/app/interaction' },
        { title : 'Service', path : '/app/service' },
        { title : 'Guide', path : '/app/guide' },
        { title : 'Car', path : '/app/car' }
      ]
    } else {
      this.tabs = [
        { title : 'Interaction', path : '/app/interaction' }
      ]
    }
  }

  ngOnInit() { }

  isActive(tab) : string{
    if(window.location.pathname === tab.path) return "active";
    else return "";
  }

}
