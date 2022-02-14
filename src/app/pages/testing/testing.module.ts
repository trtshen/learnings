import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TestingPage } from './testing';
import { TestingPageRoutingModule } from './Testing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestingPageRoutingModule
  ],
  declarations: [TestingPage],
  bootstrap: [TestingPage],
})
export class TestingModule {}
