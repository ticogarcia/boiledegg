import {Injectable, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet
    ]).subscribe(result => {
      this.mobileState.next(result.matches);
    });
  }

  mobileState: BehaviorSubject<boolean> = new BehaviorSubject(false);

  isMobile() {
    return this.mobileState.asObservable();
  }
}
