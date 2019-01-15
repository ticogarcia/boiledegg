import { NgModule } from '@angular/core';
import {
  MatIcon,
  MatButton,
  MatRippleModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  } from '@angular/material';

@NgModule({
  imports: [
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule
  ],
  declarations: [
    ],
  exports: [
    MatSidenavModule,
    MatIcon,
    MatButton,
    MatRippleModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule
    ]
})
export class MaterialModule { }
