import { Injectable } from '@angular/core';
import * as data from './data';

let services = data.services;

export class ServiceModel {
  id : Number;
  user_id : Number;
  type : Number;
  name : String;

  constructor(id : Number, user_id : Number, type : Number, name : String) {
    this.id = id;
    this.user_id = user_id;
    this.type = type;
    this.name = name;
  }

  get serviceType() : String {
    if(this.type === 1) return 'Car';
    else return 'Guide';
  }

  get vendorName() : String{
   return data.getUserById(this.user_id)[0].name;
  }

}

@Injectable()
export class ServiceService {

  current : ServiceModel;

  constructor() { }

  getServices() : ServiceModel[] {
    let collections : ServiceModel[] = [];
    for(let i=0; i<services.length; i++) {
      let service = new ServiceModel(services[i].id, services[i].user_id, services[i].type, services[i].name);
      collections.push(service);
    }
    return collections;
  }

}
