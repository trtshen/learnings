import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASplitpanePage } from './pages/a-splitpane';
import { BSplitpanePage } from './pages/b-splitpane';
import { CSplitpanePage } from './pages/c-splitpane';
import { DefaultpanePage } from './pages/defaultpane';

import { SplitpanesPage } from './splitpanes';

const routes: Routes = [
  {
    path: '',
    component: SplitpanesPage,
    children: [
      {
        path: '',
        component: DefaultpanePage,
      },
      {
        path: 'a',
        component: ASplitpanePage,
      },
      {
        path: 'b',
        component: BSplitpanePage,
      },
      {
        path: 'c',
        component: CSplitpanePage,
      },
      {
        path: '**',
        component: DefaultpanePage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplitpanesPageRoutingModule { }
