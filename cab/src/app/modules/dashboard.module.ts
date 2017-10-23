import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';


import { UserpageComponent } from '../userpage/userpage.component';
import { Uspgbody2Component } from '../uspgbody2/uspgbody2.component';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { MyridesComponent } from '../myrides/myrides.component';
import { ServicesComponent } from '../services/services.component';
import { HomeComponent } from '../home/home.component';
import { usercabchoosingpageComponent } from '../usercabchoosingpage/usercabchoosingpage.component';


const routes: Routes = [
  { path: '', component: UserpageComponent },
  { path: '', component: MyridesComponent },
  { path: '', component: ServicesComponent },
  { path: '', component: HomeComponent },


];


@NgModule({

  declarations: [
    AppComponent,
    UserpageComponent,
    usercabchoosingpageComponent,
    Uspgbody2Component,
    GoogleMapComponent,
    MyridesComponent,
    ServicesComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule, routes, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule, HttpModule, RouterModule.forChild(routes), AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWD78mPE333DsOppmymUHAZpAB1lCX4KE',
      libraries: ["places"]


    })

  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class DashboardModule { }
