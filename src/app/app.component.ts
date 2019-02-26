import {Component, HostBinding, OnInit} from '@angular/core';
import 'hammerjs';
import { MobileService } from './shared/mobile/mobile.service';
import {DomSanitizer} from '@angular/platform-browser';

import { FireauthService } from './services/firebase/fireauth.service';
import { User } from './services/firebase/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public mobileUser: boolean;
  baseFontSize: number; // Base font size for css calculations (reference body tag in styles.css)
  currentUser: User; // Currently logged in user

  constructor(private _mobileService: MobileService, private _sanitizer: DomSanitizer, private _fireAuthService: FireauthService) {}

  @HostBinding('attr.style')
  public get valueAsStyle(): any {
    return this._sanitizer.bypassSecurityTrustStyle(`--font-size: ${this.baseFontSize}`);
  }

  ngOnInit(): void {
    this._mobileService.isMobile().subscribe(result => {
      this.mobileUser = result;
      if (result) {
        this.baseFontSize = 10;
      } else {
        this.baseFontSize = 16;
      }
    });

    this._fireAuthService.user.subscribe((user) => {
      this.currentUser = user;
    });
  }
}
