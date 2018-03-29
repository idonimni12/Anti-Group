import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visibility: boolean;
  value: string;

  constructor() {}

  onGenerate(val: string) {
    this.visibility = true;
    this.value = val;
  }
}
