import { Component, OnInit } from '@angular/core';
import { GuideService } from '../model/guide.service'

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  guides = [];

  constructor(
    private guideService : GuideService
  ) { }

  ngOnInit() {
    this.guides = this.guideService.getGuides();
  }

}
