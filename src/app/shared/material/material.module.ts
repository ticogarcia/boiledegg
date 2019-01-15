import { NgModule } from '@angular/core';
import {MatToolbar, MatIcon, MatButton, MatRippleModule, MatSidenavModule, MatListModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
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
    MatRippleModule,
    MatListModule,
    MatCardModule
    ]
})
export class MaterialModule { }
