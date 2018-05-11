import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import * as data from './data';

let guides = data.guides;

export class GuideModel {

  id : number;
  service_id : number;
  city_id : number;
  cps : number;
  cphr : number;
  cphd : number;
  cpd : number;

  constructor(id : number, service_id : number, city_id : number,
    cps : number, cphr : number, cphd : number, cpd : number) {
    this.id = id;
    this.service_id = service_id;
    this.city_id = city_id;
    this.cps = cps;
    this.cphr = cphr;
    this.cphd = cphd;
    this.cpd = cpd;
  }

  get serviceName() : string {
    return data.getServiceById(this.service_id)[0].name
  }

  get cityName() : string {
    return data.getCityById(this.city_id)[0].name
  }

}

@Injectable()
export class GuideService {

  collections : GuideModel[] = [];
  current : GuideModel = undefined;

  constructor(
    private loginService : LoginService
  ) { }

  fetch() {
    let service_id = data.getServiceIdByUserId(this.loginService.user.id);
    this.collections = [];
    for(let i=0; i<guides.length; i++) {
      if(this.loginService.user.level!==1 && service_id.indexOf(guides[i].service_id) < 0) continue;
      let guide = new GuideModel(guides[i].id, guides[i].service_id, guides[i].city_id, guides[i].cps, guides[i].cphr, guides[i].cphd, guides[i].cpd);
      this.collections.push(guide);
    }
  }

  fetchAll() {
    this.collections = [];
    for(let i=0; i<guides.length; i++) {
      let guide = new GuideModel(guides[i].id, guides[i].service_id, guides[i].city_id, guides[i].cps, guides[i].cphr, guides[i].cphd, guides[i].cpd);
      this.collections.push(guide);
    }
  }

  delete(id : number) {
    let i = 0;
    while(i<guides.length && guides[i].id !== id) i++;
    guides.splice(i, 1);
  }

  update(id : number, service_id : number, city_id : number,
    cps : number, cphr : number, cphd : number, cpd : number) {
    let i = 0;
    while(i<guides.length && guides[i].id !== id) i++;
    guides[i].service_id = service_id;
    guides[i].city_id = city_id;
    guides[i].cps = cps;
    guides[i].cphr = cphr;
    guides[i].cphd = cphd;
    guides[i].cpd = cpd;
  }

  create(id : number, service_id : number, city_id : number,
    cps : number, cphr : number, cphd : number, cpd : number) {
    
    let max = 0;
    for(let i=0; i<guides.length; i++) {
      if(guides[i].id > max) max = guides[i].id;
    }

    let newGuide = {
      id : max + 1,
      service_id : service_id,
      city_id : city_id,
      cps : cps,
      cphr : cphr,
      cphd : cphd,
      cpd : cpd
    };

    guides.push(newGuide);
  }

}
