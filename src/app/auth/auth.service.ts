import * as firebase from 'firebase';
export class AuthService {
  signupUsuario(e: string, c: string) {
    firebase.auth()
    .createUserWithEmailAndPassword(e, c)
    .catch( err => console.log(err));
  }
}

