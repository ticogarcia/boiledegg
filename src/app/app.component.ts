import {  Component, OnInit} from '@angular/core';
import 'hammerjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public mobileUser: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {}

  sizeChanges = this.breakpointObserver.observe([
    Breakpoints.Handset
  ]);

  ngOnInit(): void {
    this.sizeChanges.subscribe(result => {
      this.mobileUser = result.matches;
    });
  }
}
