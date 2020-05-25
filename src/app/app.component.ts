import { Component } from '@angular/core';
import {GetFromJsonService} from '../ServiceComponents/get-from-json.service';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">{{getTitle()}}</mat-toolbar>
  <app-info-components></app-info-components>
  <div class="box">
      <mat-form-field>
      <mat-label>Country</mat-label>
      <mat-select  (click)="getCountryName()" [(value)]="Country">
              <mat-option *ngFor="let countryName of this.countryList" [value]="countryName">{{countryName}}</mat-option>
      </mat-select>
  </mat-form-field><br /><br />
      
      <mat-form-field *ngIf="Country">
          <mat-label>State</mat-label>
          <mat-select (click)="getStateName()"  [(value)]="State">
                  <mat-option *ngFor="let stateName of this.stateList" [value]="stateName">{{stateName}}</mat-option>
          </mat-select>
      </mat-form-field><br /><br />
      
      <mat-form-field *ngIf="State">
          <mat-label>City</mat-label>
          <mat-select [(value)]="City" (click)="getcityName()">
                  <mat-option  *ngFor="let cityName of this.cityList" [value]="cityName">{{cityName}}</mat-option>
          </mat-select>
      </mat-form-field><br /><br />
  </div>
    <div class="box" *ngIf="City">
        {{getImage()}}
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gallery';
  serviceObject;
  Country: string;
  State: string;
  City: string;
  countryList;
  stateList;
  cityList;
  constructor(dependency: GetFromJsonService) {
    this.serviceObject = dependency;
  }
  getTitle() {
    return this.title;
  }
  getCountryName() {
    this.countryList = [];
    this.countryList = this.serviceObject.getCountryName();
    }
  getStateName() {
    this.stateList = [];
    this.stateList = this.serviceObject.getStateName(this.Country);
  }
  getcityName() {
    this.cityList = [];
    this.cityList = this.serviceObject.getCityName(this.State);
  }
  getImage() {
return this.serviceObject.getImage(this.City);
  }
}
