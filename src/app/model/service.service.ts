import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import * as data from './data';

let services = data.services;

export class ServiceModel {
  id : number;
  user_id : number;
  type : number;
  name : string;

  constructor(id : number, user_id : number, type : number, name : string) {
    this.id = id;
    this.user_id = user_id;
    this.type = type;
    this.name = name;
  }

  get serviceType() : string {
    if(this.type === 1) return 'Car';
    else return 'Guide';
  }

  get vendorName() : string{
   return data.getUserById(this.user_id)[0].name;
  }

}

@Injectable()
export class ServiceService {

  collections : ServiceModel[] = [];
  current : ServiceModel = undefined;

  constructor(
    private loginService : LoginService
  ) { }

  fetch() {
    this.collections = [];
    for(let i=0; i<services.length; i++) {
      if(this.loginService.user.level!==1 && services[i].user_id !== this.loginService.user.id) continue;
      let service = new ServiceModel(services[i].id, services[i].user_id, services[i].type, services[i].name);
      this.collections.push(service);
    }
  }

  delete(id : number) {
    let i = 0;
    while(i<services.length && services[i].id !== id) i++;
    services.splice(i, 1);

    i = 0;
    while(i<data.cars.length){
      if(data.cars[i].service_id === id) data.cars.splice(i, 1);
      else i++;
    }
    
    i = 0;
    while(i<data.guides.length){
      if(data.guides[i].service_id === id) data.guides.splice(i, 1);
      else i++;
    }
  }

  update(id : number, type : number, name : string) {
    let i = 0;
    while(i<services.length && services[i].id !== id) i++;
    services[i].type = type;
    services[i].name = name;
  }

  create(id : number, user_id : number, type : number, name : string) {
    
    let max = 0;
    for(let i=0; i<services.length; i++) {
      if(services[i].id > max) max = services[i].id;
    }

    let newService = {
      id : max + 1,
      user_id : user_id,
      type : type,
      name : name,
    };

    services.push(newService);
  }

}
