import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

// User interface

interface User {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  userName: string;
  photoURL?: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  constructor(
    // Creates objects for FireAuth, Firestore, and Router
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.afAuth.user.subscribe((user) => {
      console.log(user);
    });
  }

}
