import { Component, OnInit } from '@angular/core';
import { ServiceService, ServiceModel } from '../model/service.service'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  services : ServiceModel[] = [];

  constructor(private serviceService : ServiceService) { }

  ngOnInit() {
    this.services = this.serviceService.getServices();
  }

  onView(service : ServiceModel) {
    console.log(service);
  }

  onDelete(service : ServiceModel) {
    console.log(service);
  }

}
