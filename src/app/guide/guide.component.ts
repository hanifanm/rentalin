import { Component, OnInit } from '@angular/core';
import { GuideService, GuideModel } from '../model/guide.service'

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  guides : GuideModel[] = [];

  constructor(
    private guideService : GuideService
  ) { }

  ngOnInit() {
    this.guides = this.guideService.getGuides();
  }

  onView(guide : GuideModel) {
    console.log(guide);
  }

  onDelete(guide : GuideModel) {
    console.log(guide);
  }

}
