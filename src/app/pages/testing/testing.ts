import { Component } from '@angular/core';

@Component({
  selector: 'page-testing',
  templateUrl: './testing.html',
  styleUrls: ['./testing.scss'],
})
export class TestingPage {
  constructor() { }

  public theme(color: string) {
    console.log(color);
  }
}
