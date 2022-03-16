import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'page-activity-detail',
  templateUrl: 'activity-detail.html',
  styleUrls: ['./activity-detail.scss'],
})
export class ActivityDetailPage {
  speakers: any[] = [];

  constructor(public platform: Platform) { }
}
