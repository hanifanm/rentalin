import { Component, OnInit } from '@angular/core';
import { CarService, CarModel } from '../model/car.service'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars : CarModel[] = [];

  constructor(
    private carService : CarService
  ) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

  onView(car : CarModel) {
    console.log(car);
  }

  onDelete(car : CarModel) {
    console.log(car);
  }

}
