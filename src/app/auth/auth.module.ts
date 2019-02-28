import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import {MaterialModule} from '../shared/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SignupOptionsComponent } from './signup-options/signup-options.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditComponent } from './user-profile/edit/edit.component';

@NgModule({
  declarations: [
      SignupComponent,
      SignupOptionsComponent,
      UserProfileComponent,
      EditComponent
  ],
  imports: [
      CommonModule,
      AuthRoutingModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      FlexLayoutModule
  ]
})
export class AuthModule { }
