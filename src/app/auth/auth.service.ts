import * as firebase from 'firebase/app';
import 'firebase/auth';

export class AuthService {
  token: string;
  signupUsuario(e: string, p: string) {
    firebase.auth()
    .createUserWithEmailAndPassword(e, p)
    .catch( err => console.log(err));
  }
  loginUsuario(e: string, p: string) {
    firebase.auth()
    .signInWithEmailAndPassword(e, p)
    .then(res =>
      firebase.auth().currentUser.getIdToken()
    ).then(
      (t: string) => {
        this.token = t;
        console.log(this.token);
      }
    );
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
    .then(
      (t: string) => this.token = t
    );
    return this.token;
  }
}

