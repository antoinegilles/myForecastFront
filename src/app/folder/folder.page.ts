import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private localNotifications: LocalNotifications, private fcm: FCM,) {

    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        console.log("Received in background");
      } else {
        console.log("Received in foreground");
      };
    });
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  showNotifications() {
    this.localNotifications.schedule({
      id: 4,
      title: 'Prévision pour demain',
      text: 'Bonne session : Prends ta 12 mètres ( 12 constant - 18 rafale - vent nord-est - marée haute 9h00 )',
      vibrate: true
    });
  }


}
