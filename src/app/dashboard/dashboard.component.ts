import { Component, OnInit } from '@angular/core';
import { CarService, CarModel } from '../model/car.service';
import { GuideService, GuideModel } from '../model/guide.service';
import { CityService, CityModel } from '../model/city.service';
import { LoginService } from '../model/login.service';
import { InteractionService, InteractionModel } from '../model/interaction.service';
import { ROLE_USER, STATUS_PENDING } from '../model/const';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  serviceType : number = 1;
  selectedCity : CityModel;
  selectedRentType: number = 1;
  isDialogCar : boolean = false;
  isDialogRentCar : boolean = false;
  isDialogRentGuide : boolean = false;
  isDialogLogin: boolean = false;
  error = '';

  constructor(
    private carService : CarService,
    private guideService : GuideService,
    private cityService : CityService,
    private interactionService : InteractionService,
    private loginService : LoginService
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

  onViewCar(car : CarModel) {
    this.carService.current = car;
    this.isDialogCar = true;
  }

  onRentCar(car : CarModel) {
    this.carService.current = car;

    if(this.loginService.isLogin && this.loginService.user.level === ROLE_USER) this.isDialogRentCar = true;
    else this.isDialogLogin = true;

    this.interactionService.current = new InteractionModel(
      -1,
      this.loginService.user.id,
      car.service_id,
      '',
      car.carType,
      car.price,
      STATUS_PENDING
    );
  }

  onRentGuide(guide : GuideModel) {
    this.guideService.current = guide;

    if(this.loginService.isLogin && this.loginService.user.level === ROLE_USER) this.isDialogRentGuide = true;
    else this.isDialogLogin = true;

    this.interactionService.current = new InteractionModel(
      -1,
      this.loginService.user.id,
      guide.service_id,
      '',
      guide.name,
      0,
      STATUS_PENDING
    );

    this.selectedRentType = 1;

  }

  getGuidePrice() {
    if(parseInt(this.selectedRentType.toString()) === 1) return this.guideService.current.cps;
    else if(parseInt(this.selectedRentType.toString()) === 2) return this.guideService.current.cphr;
    else if(parseInt(this.selectedRentType.toString()) === 3) return this.guideService.current.cphd;
    else if(parseInt(this.selectedRentType.toString()) === 4) return this.guideService.current.cpd;
  }

  onSubmitCar() {
    this.error = '';
    if(this.interactionService.current.rsv_date == '') this.error = 'Date must not be empty';
    if(this.error !== '') return;

    this.interactionService.create(
      this.interactionService.current.id,
      this.interactionService.current.user_id,
      this.interactionService.current.service_id,
      this.interactionService.current.rsv_date,
      this.interactionService.current.service_name,
      this.interactionService.current.price,
      this.interactionService.current.status,
    )
    this.interactionService.fetch();
    this.onCloseDialog();
  }

  onSubmitGuide() {this.error = '';
    if(this.interactionService.current.rsv_date == '') this.error = 'Date must not be empty';
    if(this.error !== '') return;

    this.interactionService.create(
      this.interactionService.current.id,
      this.interactionService.current.user_id,
      this.interactionService.current.service_id,
      this.interactionService.current.rsv_date,
      this.interactionService.current.service_name,
      this.getGuidePrice(),
      this.interactionService.current.status,
    )
    this.interactionService.fetch();
    this.onCloseDialog();
  }

  onCloseDialog() {
    this.isDialogCar = false;
    this.isDialogRentCar = false;
    this.isDialogRentGuide = false;
    this.isDialogLogin = false;
  }

  onCloseError() {
    this.error = '';
  }

}
