import { Injectable } from '@angular/core';
import * as data from './data';

let cars = data.cars;

export class CarModel {

  id: Number;
  service_id: Number;
  city_id: Number;
  car_type_id: Number;
  price: Number;
  additional: String;
  seat: Number;
  image: String;

  constructor(id : Number, service_id : Number, city_id : Number, car_type_id : Number,
    price : Number, additional : String, seat : Number, image : String) {
    this.id = id;
    this.service_id = service_id;
    this.city_id = city_id;
    this.car_type_id = car_type_id;
    this.price = price;
    this.additional = additional;
    this.seat = seat;
    this.image = image;
  }

  get serviceName() : String {
    return data.getServiceById(this.service_id)[0].name;
  }

  get cityName() : String {
    return data.getCityById(this.city_id)[0].name;
  }

  get carType() : String {
    return data.getCarTypeById(this.car_type_id)[0].name;
  }

}

@Injectable()
export class CarService {

  current : CarModel;

  constructor() { }

  getCars() {
    let collections = [];
    for(let i=0; i<cars.length; i++) {
      let car = new CarModel(cars[i].id, cars[i].service_id, cars[i].city_id, cars[i].car_type_id, cars[i].price, cars[i].additional, cars[i].seat, cars[i].image);
      collections.push(car);
    }
    return collections;
  }

}
