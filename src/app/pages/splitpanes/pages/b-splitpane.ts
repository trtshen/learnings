import { Component } from '@angular/core';

@Component({
  selector: 'b-splitpane',
  templateUrl: './b-splitpane.html',
  styleUrls: ['./b-splitpane.scss'],
})
export class BSplitpanePage {
  constructor() { }

  public theme(color: string) {
    console.log(color);
  }
}
