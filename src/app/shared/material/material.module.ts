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
  MatDividerModule
  } from '@angular/material';
import {
  FlexLayoutModule
} from '@angular/flex-layout';

@NgModule({
  imports: [
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    FlexLayoutModule
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
    MatGridListModule,
    MatDividerModule,
    FlexLayoutModule
    ]
})
export class MaterialModule { }
