import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {FireauthService} from '../../services/firebase/fireauth.service';

// TODO Fix Validator expected to return a promise error from email validation

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
/**
 * Signup component handles user signup through email or google
 */
export class SignupComponent implements OnInit {

  generalInformation: FormGroup;
  contact: FormGroup;

  /**
   * Initialized fireAuth service and form builder
   * @param _formBuilder
   * @param _fireAuthService
   */
  constructor(
      private _formBuilder: FormBuilder,
      private _fireAuthService: FireauthService
  ) {}

  /**
   * Runs on initialization of component
   * Builds form with all of user input, refer to User interface.
   */
  ngOnInit(): void { // TODO Integrate into firebase
    // TODO Move form builder into seperate service
    this.generalInformation = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(7)]]
    });
    this.contact = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  /**
   * Returns form object
   * @returns form object with errors and other info
   */
  get form() { return this.generalInformation.controls; }

}
