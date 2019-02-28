import { Component, OnInit } from '@angular/core';

import {FireauthService} from '../../../services/firebase/fireauth.service';
import { User } from '../../../services/firebase/user.interface';
import {SignupFormService} from '../../../services/forms/signup-form.service';

/**
 * Webpage for users to edit their account information
 */

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

// TODO Move form into separate component for reuse
export class EditComponent implements OnInit {

  currentUser: User; // Currently logged in user

  /**
   * Initialized Auth service for fireauth
   * @param _fireAuthService
   */
  constructor(
      private _fireAuthService: FireauthService,
      private _signupFormService: SignupFormService
  ) { }

  ngOnInit() {
    /**
     * Gets current logged in user and sets it to object for use in code
     * Look at fireAuth service for more info
     */
    this._fireAuthService.user.subscribe((user) => {
      this.currentUser = user;
    });
  }

}
