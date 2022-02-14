import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestingPage } from './testing';

const routes: Routes = [
  {
    path: '',
    component: TestingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingPageRoutingModule { }
