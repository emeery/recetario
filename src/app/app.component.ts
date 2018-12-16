import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBXYTKXla19B3geOAN76-zW0lOjb1n5xtE',
      authDomain: 'notas-158c7.firebaseapp.com',

    });
  }
}


