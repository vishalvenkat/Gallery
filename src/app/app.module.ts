import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialComponentsModule} from '../material-components/material-components.module';
import {HttpClientModule} from '@angular/common/http';
import {InfoComponentsComponent} from '../Components/info-components/info-components.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
