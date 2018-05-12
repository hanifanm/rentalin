import { Component, OnInit } from '@angular/core';
import { CarService, CarModel } from '../model/car.service';
import { GuideService, GuideModel } from '../model/guide.service';
import { CityService, CityModel } from '../model/city.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  serviceType : number = 1;
  selectedCity : CityModel;

  constructor(
    private carService : CarService,
    private guideService : GuideService,
    private cityService : CityService
  ) { }

  ngOnInit() {
    this.carService.fetchAll();
    this.guideService.fetchAll();
    this.cityService.fetch();
    this.selectedCity = this.cityService.collections[0];
  }

  filteredCars() {
    return this.carService.collections
    .filter(c => c.city_id === this.selectedCity.id);
  }

  filteredGuides() {
    return this.guideService.collections
    .filter(c => c.city_id === this.selectedCity.id);
  }

  changeServiceType(st : number) {
    this.serviceType = st;
  }

  changeCity(selectedCity) {
    this.selectedCity = selectedCity;
  }

}
