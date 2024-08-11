import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule, MatIconModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"smallpolandkartingleague","appId":"1:290670666019:web:adb102dbd5bfa21c456c96","storageBucket":"smallpolandkartingleague.appspot.com","apiKey":"AIzaSyDvb5ljr6BR28j5LCB8oM1fjQy9zIWkMX8","authDomain":"smallpolandkartingleague.firebaseapp.com","messagingSenderId":"290670666019"})),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
