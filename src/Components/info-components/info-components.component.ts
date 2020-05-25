import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-components',
  template: `
    <mat-card>
      <h3>{{displayText}}</h3>
    </mat-card>
  `,
  styleUrls: ['./info-components.component.css']
})
export class InfoComponentsComponent implements OnInit {
displayText = 'Gallery application helps you to view various beautiful cities in and around the world.' +
  ' Start by selecting each of the category to view the city.';
  constructor() { }

  ngOnInit() {
  }

}
