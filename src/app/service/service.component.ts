import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../model/service.service'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  services = [];

  constructor(private serviceService : ServiceService) { }

  ngOnInit() {
    this.services = this.serviceService.getServices();
  }

}
