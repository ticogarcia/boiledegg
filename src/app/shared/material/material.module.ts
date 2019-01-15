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
  MatButtonModule
  } from '@angular/material';

@NgModule({
  imports: [
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
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
    MatButtonModule
    ]
})
export class MaterialModule { }
