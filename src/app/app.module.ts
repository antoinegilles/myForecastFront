import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//notifications
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

//firebase
import { FCM } from '@ionic-native/fcm/ngx';


// const firebaseConfig = {
//   apiKey: "AIzaSyB0UyJPHm87GNj2OfrPr130CJiT8N3kfQ8",
//   authDomain: "myforecast-a4fd6.firebaseapp.com",
//   projectId: "myforecast-a4fd6",
//   storageBucket: "myforecast-a4fd6.appspot.com",
//   messagingSenderId: "271284776778",
//   appId: "1:271284776778:web:00072263a28397b7109bb3",
//   measurementId: "G-5Y59TZW125"
// };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, LocalNotifications, FCM],
  bootstrap: [AppComponent],
})
export class AppModule { }
