import { Component } from '@angular/core';

@Component({
  selector: 'a-splitpane',
  templateUrl: './a-splitpane.html',
  styleUrls: ['./a-splitpane.scss'],
})
export class ASplitpanePage {
  constructor() { }

  public theme(color: string) {
    console.log(color);
  }
}
