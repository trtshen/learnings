import { Component } from '@angular/core';

@Component({
  selector: 'page-splitpanes',
  templateUrl: './splitpanes.html',
  styleUrls: ['./splitpanes.scss'],
})
export class SplitpanesPage {
  constructor() { }

  public theme(color: string) {
    console.log(color);
  }
}
