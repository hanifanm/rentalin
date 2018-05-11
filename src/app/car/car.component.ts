import { Component, OnInit } from '@angular/core';
import { CarService, CarModel } from '../model/car.service';
import { ServiceService, ServiceModel } from '../model/service.service';
import { CityService, CityModel } from '../model/city.service';
import { CarTypeService, CarTypeModel } from '../model/car-type.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  isDialogView : boolean = false;
  isDialogForm : boolean = false;
  isDialogDelete : boolean = false;
  error : string = '';

  constructor(
    private carService : CarService,
    private serviceService : ServiceService,
    private carTypeService : CarTypeService,
    private cityService : CityService
  ) { }

  ngOnInit() {
    this.carService.fetch();
    this.serviceService.fetch();
    this.carTypeService.fetch();
    this.cityService.fetch();
  }

  getFilteredService() {
    return this.serviceService.collections.filter( s => s.type === 1 );
  }

  onView(car : CarModel) {
    this.carService.current = car;
    this.isDialogView = true;
  }

  onEdit() {
    this.onCloseDialog();
    this.error = '';
    let oldCurrent = this.carService.current;
    this.carService.current = new CarModel(
      oldCurrent.id,
      oldCurrent.service_id,
      oldCurrent.city_id,
      oldCurrent.car_type_id,
      oldCurrent.price,
      oldCurrent.additional,
      oldCurrent.seat,
      oldCurrent.image
    )
    this.isDialogForm = true;
  }

  onCreate() {
    this.onCloseDialog();
    this.error = '';
    this.carService.current = new CarModel(-1, 0, 0, 0, 0, '', 0, '');
    this.isDialogForm = true;
  }

  onDelete(car : CarModel) {
    this.carService.current = car;
    this.isDialogDelete = true;
  }

  onSubmitDelete() {
    this.carService.delete(this.carService.current.id);
    this.carService.fetch();
    this.onCloseDialog();
  }

  onSubmitForm() {

    this.error = '';

    if(this.carService.current.image == '') this.error = "Image URL must not be empty";
    if(this.carService.current.seat == 0) this.error = "Capacity must not be empty";
    if(this.carService.current.price == 0) this.error = "Price must not be empty";
    if(this.carService.current.car_type_id == 0) this.error = "Car Type must not be empty";
    if(this.carService.current.city_id == 0) this.error = "City must not be empty";
    if(this.carService.current.service_id == 0) this.error = "Service must not be empty";
    if(this.error != '') return;

    if(this.carService.current.id === -1) {
      this.carService.create(
        this.carService.current.id,
        parseInt(this.carService.current.service_id.toString()),
        parseInt(this.carService.current.city_id.toString()),
        parseInt(this.carService.current.car_type_id.toString()),
        this.carService.current.price,
        this.carService.current.additional,
        this.carService.current.seat,
        this.carService.current.image
      );
    } else {
      this.carService.update(
        this.carService.current.id,
        parseInt(this.carService.current.service_id.toString()),
        parseInt(this.carService.current.city_id.toString()),
        parseInt(this.carService.current.car_type_id.toString()),
        this.carService.current.price,
        this.carService.current.additional,
        this.carService.current.seat,
        this.carService.current.image
      );
    }

    this.carService.fetch();
    this.onCloseDialog();
  }

  onCloseDialog() {
    this.isDialogView = false;
    this.isDialogForm = false;
    this.isDialogDelete = false;
  }

  onCloseError() {
    this.error = '';
  }

}
