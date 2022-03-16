import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'page-activity-sample',
  templateUrl: 'activity-sample.html',
  styleUrls: ['./activity-sample.scss'],
})
export class ActivitySamplePage {
  speakers: any[] = [];

  constructor(public platform: Platform) {}
  gothere() {
    console.log('here!');
  }
}
