import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ActivitySamplePage } from './activity-sample';
import { ActivitySamplePageRoutingModule } from './activity-sample-routing.module';
import { ActivityDetailPage } from './activity-detail/activity-detail';
import { ActivityDetailMobilePage } from './activity-detail-mobile/activity-detail-mobile';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ActivitySamplePageRoutingModule
  ],
  declarations: [ActivitySamplePage, ActivityDetailPage, ActivityDetailMobilePage],
})
export class ActivitySampleModule {}
