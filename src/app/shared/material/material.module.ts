import { NgModule } from '@angular/core';
import {MatToolbar, MatSidenav, MatIcon, MatButton, MatRippleModule} from '@angular/material';

@NgModule({
  imports: [MatRippleModule],
  declarations: [MatToolbar, MatSidenav, MatIcon, MatButton],
  exports: [MatToolbar, MatSidenav, MatIcon, MatButton, MatRippleModule]
})
export class MaterialModule { }
