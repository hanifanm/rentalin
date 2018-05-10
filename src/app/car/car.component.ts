import { Component, OnInit } from '@angular/core';
import { CarService } from '../model/car.service'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars = [];

  constructor(
    private carService : CarService
  ) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

}
