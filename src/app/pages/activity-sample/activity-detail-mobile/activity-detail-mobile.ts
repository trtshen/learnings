import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'page-activity-detail-mobile',
  templateUrl: 'activity-detail-mobile.html',
  styleUrls: ['./activity-detail-mobile.scss'],
})
export class ActivityDetailMobilePage {
  speakers: any[] = [];

  constructor(public platform: Platform) { }
}
