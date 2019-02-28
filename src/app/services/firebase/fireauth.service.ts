import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap} from 'rxjs/operators';

import { User } from './user.interface';

/**
 * Fire authentication service for authentication via Firebase using google and email
 */

@Injectable({ providedIn: 'root' })

export class FireauthService {

  user: Observable<User>;

  constructor(
    // Creates objects for FireAuth, Firestore, and Router
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

    /**
     * Gets user document
     * @returns Observable of user document data || null
     * No metadata when using valueChanges, snapshotChanges() returns metadata
     */
    this.user = this.afAuth.authState.pipe(
      switchMap(user => { // Switch map is essentially an if statement to switch tho a new observable
        if (user) {
          // Wrapper for [Document Reference Type](https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference)
          // Refers to Document Location in firebase for path
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null); // Returns undefined as observable
        }
      })
    );
  }

  /**
   * Provides a method for login using oAuth, used to pass in
   * Example, google login
   * @param provider
   * @returns Sign in with popup
   */
  private  oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        // The signed in user info
        const userReturned = result.user; // TODO figure out how to take this and append rest of login info
        const userObject: User = {
          uid: userReturned.uid,
          email: userReturned.email,
          firstName: userReturned.displayName.split(' ')[0],
          lastName: userReturned.displayName.split(' ')[1],
          phone: userReturned.phoneNumber,
          userName: userReturned.displayName.split(' ').join(''),
          photoURL: userReturned.photoURL,
        };
        this.updateUserData(userObject)
          .then(null);
      });
  }

  /**
   * Google login
   * @returns Google popup provider
   */
   googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  /**
   * Creates new user with email and password. Returns error code and updates user credentials.
   * @param user
   * @param password
   * @returns [error code](https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword)
   */
  createUserEmailPassword(user: User, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, password)
      .catch((error) => {
        const errorCode = error.code;
        console.log(error);
        if (errorCode) {
          return errorCode;
        } else {
          return error;
        }
      })
      .then((credential) => {
        this.updateUserData(credential.user)
          .then((status) => {
            console.log(status);
          });
      });
  }

  /**
   * User sign-in with email and password. Returns error code and updates user credentials.
   * @param email
   * @param password
   * @returns [error code](https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword)
   */
  signInWithEmailPassword(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch((error) => {
        const errorCode = error.code;
        console.log(error);
        if (errorCode) {
          return errorCode;
        } else {
          return error;
        }
      })
      .then((credential) => {
        this.updateUserData(credential.user)
          .then((status) => {
            console.log(status);
          });
      });
  }

  /**
   * Updates the user with new information
   * @param user object
   * @returns response from set function
   */
  private updateUserData(user) {
    // References user in Firestore
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = { // TODO Refactor to make these optional
      uid: user.uid ? user.uid : '',
      email: user.email ? user.email : '',
      firstName: user.firstName ? user.firstName : '',
      lastName: user.lastName ? user.lastName : '',
      phone: user.phone ? user.phone : 0,
      userName: user.userName ? user.userName : '',
      photoURL: user.photoURL ? user.photoURL : ''
    };

    return userRef.set(data, { merge: true });
  }

  /**
   * Signs out user and navigates to root
   */
  signOut() { // TODO Refactor to a onAuthChanged method
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']).then(null);
    });
  }
}
