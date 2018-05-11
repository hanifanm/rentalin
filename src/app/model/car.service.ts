import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import * as data from './data';

let cars = data.cars;

export class CarModel {

  id: number;
  service_id: number;
  city_id: number;
  car_type_id: number;
  price: number;
  additional: string;
  seat: number;
  image: string;

  constructor(id : number, service_id : number, city_id : number, car_type_id : number,
    price : number, additional : string, seat : number, image : string) {
    this.id = id;
    this.service_id = service_id;
    this.city_id = city_id;
    this.car_type_id = car_type_id;
    this.price = price;
    this.additional = additional;
    this.seat = seat;
    this.image = image;
  }

  get serviceName() : string {
    return data.getServiceById(this.service_id)[0].name;
  }

  get cityName() : string {
    return data.getCityById(this.city_id)[0].name;
  }

  get carType() : string {
    return data.getCarTypeById(this.car_type_id)[0].name;
  }

}

@Injectable()
export class CarService {

  collections : CarModel[] = [];
  current : CarModel = undefined;
  lastError : string = '';

  constructor(
    private loginService : LoginService
  ) { }

  fetch() {
    let service_id = data.getServiceIdByUserId(this.loginService.user.id);
    this.collections = [];
    for(let i=0; i<cars.length; i++) {
      if(this.loginService.user.level!==1 && service_id.indexOf(cars[i].service_id) < 0) continue;
      let car = new CarModel(cars[i].id, cars[i].service_id, cars[i].city_id, cars[i].car_type_id, cars[i].price, cars[i].additional, cars[i].seat, cars[i].image);
      this.collections.push(car);
    }
  }

  fetchAll() {
    this.collections = [];
    for(let i=0; i<cars.length; i++) {
      let car = new CarModel(cars[i].id, cars[i].service_id, cars[i].city_id, cars[i].car_type_id, cars[i].price, cars[i].additional, cars[i].seat, cars[i].image);
      this.collections.push(car);
    }
  }

  delete(id : number) {
    let i = 0;
    while(i<cars.length && cars[i].id !== id) i++;
    cars.splice(i, 1);
  }

  update(id : number, service_id : number, city_id : number, car_type_id : number,
    price : number, additional : string, seat : number, image : string) {
    let i = 0;
    while(i<cars.length && cars[i].id !== id) i++;
    cars[i].service_id = service_id;
    cars[i].city_id = city_id;
    cars[i].car_type_id = car_type_id;
    cars[i].price = price;
    cars[i].additional = additional;
    cars[i].seat = seat;
    cars[i].image = image;
  }

  create(id : number, service_id : number, city_id : number, car_type_id : number,
    price : number, additional : string, seat : number, image : string) {
    
    let max = 0;
    for(let i=0; i<cars.length; i++) {
      if(cars[i].id > max) max = cars[i].id;
    }

    let newCar = {
      id : max + 1,
      service_id : service_id,
      city_id : city_id,
      car_type_id : car_type_id,
      price : price,
      additional : additional,
      seat : seat,
      image : image
    };

    cars.push(newCar);
  }

}
