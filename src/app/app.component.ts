import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularRecipeApp';


  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCjijIjNnVA3KoAMFy__l63KBVoZWTCLhc",
      authDomain: "testhttp-d92e6.firebaseapp.com"
    })
  }
}


