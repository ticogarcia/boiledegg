import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignupValidatorsService} from './signup-validators.service';

@Injectable({
  providedIn: 'root'
})
export class SignupFormService {

  public signupForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _signupValidator: SignupValidatorsService
  ) {
    this.signupForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(7)]],
      contactInfo: this._fb.group({
        email: ['', Validators.required, Validators.email],
        phone: ['', Validators.required]
      })
    });
  }

}
