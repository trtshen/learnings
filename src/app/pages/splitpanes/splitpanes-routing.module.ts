import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASplitpanePage } from './pages/a-splitpane';
import { BSplitpanePage } from './pages/b-splitpane';
import { CSplitpanePage } from './pages/c-splitpane';
import { DefaultpanePage } from './pages/defaultpane';

import { SplitpanesPage } from './splitpanes';

const defaultPage = {
  path: '',
  component: DefaultpanePage,
};

const routes: Routes = [
  {
    path: '',
    component: SplitpanesPage,
    children: [
      defaultPage,
      {
        path: 'a',
        component: ASplitpanePage,
        children: [
          defaultPage,
          {
            path: 'b',
            component: BSplitpanePage,
            children: [
              defaultPage,
              {
                path: 'c',
                component: CSplitpanePage,
                children: [
                  defaultPage
                ]
              },
            ]
          },
        ]
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
