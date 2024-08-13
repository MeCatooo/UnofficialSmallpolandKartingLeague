import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { EventResultsComponent } from './event-results/event-results.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { TrackListComponent } from './track/track-list/track-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
      HomeComponent,
      EventResultsComponent,
      CreateEventComponent,
      TrackListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule, MatIconModule,
    ReactiveFormsModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"smallpolandkartingleague","appId":"1:290670666019:web:adb102dbd5bfa21c456c96","storageBucket":"smallpolandkartingleague.appspot.com","apiKey":"AIzaSyDvb5ljr6BR28j5LCB8oM1fjQy9zIWkMX8","authDomain":"smallpolandkartingleague.firebaseapp.com","messagingSenderId":"290670666019"})),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
