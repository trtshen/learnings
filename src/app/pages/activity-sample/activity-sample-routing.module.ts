import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityDetailMobilePage } from './activity-detail-mobile/activity-detail-mobile';
import { ActivityDetailPage } from './activity-detail/activity-detail';

import { ActivitySamplePage } from './activity-sample';
const routes: Routes = [
  {
    path: '',
    component: ActivitySamplePage,
    children: [
      {
        path: 'detail',
        component: ActivityDetailPage,
      },
    ],

  },
  {
    path: 'detail-mobile',
    component: ActivityDetailMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitySamplePageRoutingModule {}
