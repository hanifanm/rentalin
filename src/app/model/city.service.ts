import { Injectable } from '@angular/core';
import * as data from './data';

let cities = data.cities;

export class CityModel {

  id : number;
  name : string;

  constructor(id : number, name : string) {
    this.id = id; 
    this.name = name;
  }

}

@Injectable()
export class CityService {

  collections : CityModel[] = [];
  current : CityModel = undefined;

  constructor() { }

  fetch() {
    this.collections = [];
    for(let i=0; i<cities.length; i++) {
      let city = new CityModel(cities[i].id, cities[i].name);
      this.collections.push(city);
    }
  }

}
