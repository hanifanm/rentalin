import { Component, OnInit } from '@angular/core';
import { GuideService, GuideModel } from '../model/guide.service'
import { ServiceService, ServiceModel } from '../model/service.service';
import { CityService, CityModel } from '../model/city.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  isDialogView : boolean = false;
  isDialogForm : boolean = false;
  isDialogDelete : boolean = false;
  error : string = '';

  constructor(
    private guideService : GuideService,
    private serviceService : ServiceService,
    private cityService : CityService
  ) { }

  ngOnInit() {
    this.guideService.fetch();
    this.serviceService.fetch();
    this.cityService.fetch();
  }

  getFilteredService() {
    return this.serviceService.collections.filter( s => s.type === 2 );
  }

  onView(guide : GuideModel) {
    this.guideService.current = guide;
    this.isDialogView = true;
  }

  onEdit() {
    this.onCloseDialog();
    this.error = '';
    let oldCurrent = this.guideService.current;
    this.guideService.current = new GuideModel(
      oldCurrent.id,
      oldCurrent.service_id,
      oldCurrent.city_id,
      oldCurrent.cps,
      oldCurrent.cphr,
      oldCurrent.cphd,
      oldCurrent.cpd
    )
    this.isDialogForm = true;
  }

  onCreate() {
    this.onCloseDialog();
    this.error = '';
    this.guideService.current = new GuideModel(-1, 0, 0, 0, 0, 0, 0);
    this.isDialogForm = true;
  }

  onDelete(guide : GuideModel) {
    this.guideService.current = guide;
    this.isDialogDelete = true;
  }

  onSubmitDelete() {
    this.guideService.delete(this.guideService.current.id);
    this.guideService.fetch();
    this.onCloseDialog();
  }

  onSubmitForm() {

    this.error = '';

    if(this.guideService.current.cpd == 0) this.error = "Cost Per Day must not be empty";
    if(this.guideService.current.cphd == 0) this.error = "Cost Per Half Day must not be empty";
    if(this.guideService.current.cphr == 0) this.error = "Cost Per Hour must not be empty";
    if(this.guideService.current.cps == 0) this.error = "Cost Per Service must not be empty";
    if(this.guideService.current.city_id == 0) this.error = "City must not be empty";
    if(this.guideService.current.service_id == 0) this.error = "Service must not be empty";
    if(this.error != '') return;

    if(this.guideService.current.id === -1) {
      this.guideService.create(
        this.guideService.current.id,
        parseInt(this.guideService.current.service_id.toString()),
        parseInt(this.guideService.current.city_id.toString()),
        this.guideService.current.cps,
        this.guideService.current.cphr,
        this.guideService.current.cphd,
        this.guideService.current.cpd
      );
    } else {
      this.guideService.update(
        this.guideService.current.id,
        parseInt(this.guideService.current.service_id.toString()),
        parseInt(this.guideService.current.city_id.toString()),
        this.guideService.current.cps,
        this.guideService.current.cphr,
        this.guideService.current.cphd,
        this.guideService.current.cpd
      );
    }

    this.guideService.fetch();
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
