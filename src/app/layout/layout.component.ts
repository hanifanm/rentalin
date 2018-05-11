import { Component, OnInit } from '@angular/core';
import { LoginService } from '../model/login.service';

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
    if(loginService.user.level == 1) {
      this.tabs = [
        { title : 'User', path : '/app/user' },
        { title : 'Service', path : '/app/service' },
        { title : 'Guide', path : '/app/guide' },
        { title : 'Car', path : '/app/car' }
      ]
    } else if(loginService.user.level == 2) {
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

}
