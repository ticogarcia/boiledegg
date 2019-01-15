import {  Component, OnInit} from '@angular/core';
import 'hammerjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { MobileService } from './shared/mobile/mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public mobileUser: boolean;

  constructor(private mobileService: MobileService) {}

  ngOnInit(): void {
    this.mobileService.isMobile().subscribe(result => {
      this.mobileUser = result;
    });
  }
}
