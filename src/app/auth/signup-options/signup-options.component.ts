import { Component, OnInit } from '@angular/core';
import {FireauthService} from "../../services/firebase/fireauth.service";

@Component({
  selector: 'app-signup-options',
  templateUrl: './signup-options.component.html',
  styleUrls: ['./signup-options.component.css']
})
export class SignupOptionsComponent implements OnInit {

  constructor(private _fireAuthService: FireauthService) { }

  ngOnInit() {
  }

  signupWithGoogle() {
    this._fireAuthService.googleLogin().catch((error) => {
      console.log(error);
    });
  }

  getUser() {
    this._fireAuthService.user.subscribe((user) => {
      console.log(user);
    });
  }

}
