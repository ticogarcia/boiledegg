import { Component, OnInit } from '@angular/core';
import {MobileService} from '../../shared/mobile/mobile.service';

@Component({
  selector: 'app-landing-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['../landing.component.css']
})
export class ThirdPageComponent implements OnInit {

  isMobile: boolean; // Are you on a mobile device?

  rowspan: number; // Holds column width
  colspan: number; // Holds row width

  constructor(private mobileService: MobileService) { }

  ngOnInit() {
    this.mobileService.isMobile().subscribe(result => {
      this.isMobile = result;
      if (result) {
        this.colspan = 4;
        this.rowspan = 2;
      } else {
        this.colspan = 2;
        this.rowspan = 4;
      }
    });
  }

}
