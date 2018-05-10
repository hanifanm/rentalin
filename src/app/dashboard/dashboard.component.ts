import { Component, OnInit } from '@angular/core';
import { CarService, CarModel } from '../model/car.service';
import * as data from '../model/data';

let cities = data.cities;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  serviceType : Number = 1;
  cities = cities;
  selectedCity = cities[0];
  cars: CarModel[] = [];

  constructor(
    private carService : CarService
  ) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

  filteredCars() {
    return this.cars.filter(c => c.city_id === this.selectedCity.id);
  }

  changeServiceType(st : Number) {
    this.serviceType = st;
  }

  changeCity(selectedCity) {
    this.selectedCity = selectedCity;
  }

}
