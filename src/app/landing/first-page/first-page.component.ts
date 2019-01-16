import { Component, OnInit } from '@angular/core';
import { MobileService } from '../../shared/mobile/mobile.service';

@Component({
  selector: 'app-landing-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['../landing.component.css']
})
export class FirstPageComponent implements OnInit {

  isMobile: boolean; // Are you on a mobile device?

  rowspanText: number; // Holds column width for text
  colspanText: number; // Holds row width for text

  rowspanEgg: number; // Holds row width egg illustration
  colspanEgg: number; // Holds coumn width egg illustrationm

  constructor(private mobileService: MobileService) { }

  ngOnInit() {
    this.mobileService.isMobile().subscribe(result => {
      this.isMobile = result;
      if (result) {
        this.colspanText = 4;
        this.colspanEgg = 4;
        this.rowspanText = 3;
        this.rowspanEgg = 3;
      } else {
        this.colspanText = 2;
        this.colspanEgg = 2;
        this.rowspanText = 4;
        this.rowspanEgg = 4;
      }
    });
  }

}
