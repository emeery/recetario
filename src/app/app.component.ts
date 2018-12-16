import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
      firebase.initializeApp({
        apiKey: 'AIzaSyAdN-1zwlCkBTHUeokFG1a8PVa4u27FLPo',
        authDomain: 'recetario-2777f.firebaseapp.com'
      });
  }
}


