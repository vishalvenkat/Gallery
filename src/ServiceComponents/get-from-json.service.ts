import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {count} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetFromJsonService {
http;
jsonData;
countryList = [];
stateList = [];
cityList = [];
PATH_FOR_COUNTRY_LIST = './assets/CountryData.json';
PATH_FOR_STATE_LIST = './assets/StateData.json';
PATH_FOR_CITY_LIST = './assets/CityData.json';
CountryData;
StateData;
CityData;
  constructor(httpClient: HttpClient) {
      httpClient.get(this.PATH_FOR_COUNTRY_LIST).subscribe(data => this.CountryData = data as string[]);
      httpClient.get(this.PATH_FOR_STATE_LIST).subscribe(data => this.StateData = data as string[]);
      httpClient.get(this.PATH_FOR_CITY_LIST).subscribe(data => this.CityData = data as string[]);
  }
  getCountryName() {
    this.countryList = [];
    for (const country in this.CountryData) {
      this.countryList.push(this.CountryData[country].country);
    }
    return this.countryList;
 //   this.getAlterStateName('');
  //  this.getAlterCityName('');
  }
  getStateName(countryName) {
    this.stateList = [];
    for (const itr in this.CountryData) {
      if (this.CountryData[itr].country === countryName) {
        for (const state in this.CountryData[itr].states) {
          this.stateList.push(this.CountryData[itr].states[state]);
        }
        break;
      }
    }
    return this.stateList;
  }
  getCityName(stateName) {
    this.cityList = [];
    for (const itr in this.StateData) {
      if (this.StateData[itr].state === stateName) {
        for (const city in this.StateData[itr].cities) {
          this.cityList.push(this.StateData[itr].cities[city]);
        }
        break;
      }
    }
    return this.cityList;
  }
  getImage(city) {
    for (const itr in this.CityData) {
      if (this.CityData[itr].city === city) {
      return this.CityData[itr].image;
      }
    }
  }
}
