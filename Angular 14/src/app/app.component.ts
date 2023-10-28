import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';
import { SettingsTerminalService } from './settings-company/settings-terminal.service';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
    ngOnInit(): void {

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          const firebaseConfig = {
            apiKey: "AIzaSyD2peZ-H4tPnWB3GNtKpKXCEpWEO7bwbRU",
            authDomain: "vdinev-afd00.firebaseapp.com",
            projectId: "vdinev-afd00",
            storageBucket: "vdinev-afd00.appspot.com",
            messagingSenderId: "600295061344",
            appId: "1:600295061344:web:2b3ff25d3ad41b81db5005",
            measurementId: "G-J36HQ14XWF"
          };

    // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          const analytics = getAnalytics(app);
    }
  title = 'my-first-project';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


}
