import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ROLE_SUPERADMIN, ROLE_USER, ROLE_VENDOR } from './const';
import { STATUS_PENDING, STATUS_APPROVED, STATUS_CANCELLED, STATUS_REJECTED } from './const';
import * as data from './data';

let interactions = data.interactions;

export class InteractionModel {

  id : number;
  user_id : number;
  service_id : number;
  rsv_date : string;
  service_name : string;
  price : number;
  status : number;

  constructor(id : number, user_id : number, service_id : number, rsv_date : string, service_name : string, price : number, status : number) {
    this.id = id;
    this.user_id = user_id;
    this.service_id = service_id;
    this.rsv_date = rsv_date;
    this.service_name = service_name;
    this.price = price;
    this.status = status;
  }

  get statusName() : string {
    switch(this.status) {
      case STATUS_APPROVED : {
        return 'APPROVED';
      }
      case STATUS_REJECTED : {
        return 'REJECTED';
      }
      case STATUS_PENDING : {
        return 'PENDING';
      }
      case STATUS_CANCELLED : {
        return 'CANCELLED';
      }
    }
  }

  get statusColor() : string {
    switch(this.status) {
      case STATUS_APPROVED : {
        return 'green';
      }
      case STATUS_REJECTED : {
        return 'red';
      }
      case STATUS_PENDING : {
        return 'black';
      }
      case STATUS_CANCELLED : {
        return 'orange';
      }
    }
  }

  get costumerName() : string {
    return data.getUserById(this.user_id)[0].name;
  }

}

@Injectable()
export class InteractionService {

  collections : InteractionModel[] = [];
  current : InteractionModel = undefined;

  constructor(
    private loginService : LoginService
  ) { }

  fetch() {
    let service_id = data.getServiceIdByUserId(this.loginService.user.id);
    this.collections = [];
    for(let i=0; i<interactions.length; i++) {
      if(this.loginService.user.level === ROLE_VENDOR && service_id.indexOf(interactions[i].service_id) < 0) continue;
      if(this.loginService.user.level === ROLE_USER && interactions[i].user_id !== this.loginService.user.id) continue;
      let interaction = new InteractionModel(interactions[i].id, interactions[i].user_id, interactions[i].service_id, interactions[i].rsv_date, interactions[i].service_name, interactions[i].price, interactions[i].status);
      this.collections.push(interaction);
    }
  }

  update(id : number, status : number) {
    let i = 0;
    while(i<interactions.length && interactions[i].id !== id) i++;
    interactions[i].status = status;
  }

  create(id : number, user_id : number, service_id : number, rsv_date : string, service_name : string, price : number, status : number) {
    
    let max = 1;
    for(let i=0; i<interactions.length; i++) {
      if(interactions[i].id > max) max = interactions[i].id;
    }

    let newInteraction = {
      id : max + 1,
      user_id : user_id,
      service_id : service_id,
      rsv_date : rsv_date,
      service_name : service_name,
      price : price,
      status : status
    };

    interactions.push(newInteraction);
  }

}
