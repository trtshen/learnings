import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SplitpanesPage } from './splitpanes';
import { SplitpanesPageRoutingModule } from './splitpanes-routing.module';
import { ASplitpanePage } from './pages/a-splitpane';
import { BSplitpanePage } from './pages/b-splitpane';
import { DefaultpanePage } from './pages/defaultpane';
import { CSplitpanePage } from './pages/c-splitpane';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplitpanesPageRoutingModule
  ],
  declarations: [SplitpanesPage, ASplitpanePage, BSplitpanePage, CSplitpanePage, DefaultpanePage],
  bootstrap: [SplitpanesPage],
})
export class SplitpanesModule {}
