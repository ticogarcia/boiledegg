import { NgModule } from '@angular/core';
import {MatIcon, MatButton, MatRippleModule, MatSidenavModule, MatListModule, MatCardModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule
  ],
  declarations: [
    MatIcon,
    MatButton
    ],
  exports: [
    MatSidenavModule,
    MatIcon,
    MatButton,
    MatRippleModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule
    ]
})
export class MaterialModule { }
