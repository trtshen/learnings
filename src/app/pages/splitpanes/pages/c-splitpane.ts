import { Component } from '@angular/core';

@Component({
  selector: 'c-splitpane',
  templateUrl: './c-splitpane.html',
  styleUrls: ['./c-splitpane.scss'],
})
export class CSplitpanePage {
  constructor() { }

  public theme(color: string) {
    console.log(color);
  }
}
