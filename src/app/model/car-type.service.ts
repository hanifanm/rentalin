import { Injectable } from '@angular/core';
import * as data from './data';

let car_type = data.car_type;

export class CarTypeModel {

  id : number;
  name : string;

  constructor(id : number, name : string) {
    this.id = id; 
    this.name = name;
  }

}

@Injectable()
export class CarTypeService {

  collections : CarTypeModel[] = [];
  current : CarTypeModel = undefined;

  constructor() { }

  fetch() {
    this.collections = [];
    for(let i=0; i<car_type.length; i++) {
      let city = new CarTypeModel(car_type[i].id, car_type[i].name);
      this.collections.push(city);
    }
  }

}
