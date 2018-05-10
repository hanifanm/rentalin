import { Injectable } from '@angular/core';
import * as data from './data';

let guides = data.guides;

export class GuideModel {

  id : Number;
  service_id : Number;
  city_id : Number;
  cps : Number;
  cphr : Number;
  cphd : Number;
  cpd : Number;

  constructor(id : Number, service_id : Number, city_id : Number,
    cps : Number, cphr : Number, cphd : Number, cpd : Number) {
    this.id = id;
    this.service_id = service_id;
    this.city_id = city_id;
    this.cps = cps;
    this.cphr = cphr;
    this.cphd = cphd;
    this.cpd = cpd;
  }

  get serviceName() : String {
    return data.getServiceById(this.service_id)[0].name
  }

  get cityName() : String {
    return data.getCityById(this.city_id)[0].name
  }

}

@Injectable()
export class GuideService {

  current : GuideModel;

  constructor() { }

  getGuides() : GuideModel[] {
    let collections : GuideModel[] = [];
    for(let i=0; i<guides.length; i++) {
      let guide = new GuideModel(guides[i].id, guides[i].service_id, guides[i].city_id,
        guides[i].cps, guides[i].cphr, guides[i].cphd, guides[i].cpd);
      collections.push(guide);
    }
    return collections;
  }

}
