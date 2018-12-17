import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router) {}
  signupUsuario(e: string, p: string) {
    firebase.auth()
    .createUserWithEmailAndPassword(e, p)
    .catch( err => console.log(err));
  }
  loginUsuario(e: string, p: string) {
    firebase.auth()
    .signInWithEmailAndPassword(e, p)
    .then(res => {
      this.router.navigate(['/']);
      firebase.auth().currentUser.getIdToken()
      .then(
        (t: string) => this.token = t
      );
    }).catch(err => console.log(err));
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
    .then(
      (t: string) => this.token = t
    );
    return this.token;
  }
  estaAutenticado() {
    return this.token != null;
  }
  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/login']);
    this.token = null;
  }
}

