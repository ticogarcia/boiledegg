import { NgModule } from '@angular/core';
import {MatToolbar, MatIcon, MatButton, MatRippleModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    MatRippleModule,
    MatSidenavModule
  ],
  declarations: [
    MatToolbar,
    MatIcon,
    MatButton
    ],
  exports: [
    MatToolbar,
    MatSidenavModule,
    MatIcon,
    MatButton,
    MatRippleModule
    ]
})
export class MaterialModule { }
