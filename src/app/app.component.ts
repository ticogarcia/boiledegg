import {Component, HostBinding, OnInit} from '@angular/core';
import 'hammerjs';
import { MobileService } from './shared/mobile/mobile.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public mobileUser: boolean;
  baseFontSize: number; // Base font size for css calculations (reference body tag in styles.css)

  constructor(private mobileService: MobileService, private sanitizer: DomSanitizer) {}

  @HostBinding('attr.style')
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--font-size: ${this.baseFontSize}`);
  }

  ngOnInit(): void {
    this.mobileService.isMobile().subscribe(result => {
      this.mobileUser = result;
      if (result) {
        this.baseFontSize = 10;
      } else {
        this.baseFontSize = 16;
      }
    });
  }
}
