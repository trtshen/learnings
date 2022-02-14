import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASplitpanePage } from './pages/a-splitpane';
import { BSplitpanePage } from './pages/b-splitpane';

import { SplitpanesPage } from './splitpanes';

const routes: Routes = [
  {
    path: '',
    component: SplitpanesPage,
    children: [
      {
        path: 'a',
        component: ASplitpanePage,
      },
      {
        path: 'b',
        component: BSplitpanePage,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplitpanesPageRoutingModule { }
