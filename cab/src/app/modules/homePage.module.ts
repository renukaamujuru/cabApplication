import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared/shared.module';

import { WelcomeComponent } from '../welcome/welcome.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { BodyComponent } from '../body/body.component';

export const routes: Routes = [
  { 
    path: '', component: WelcomeComponent
  
  },
  { 
    path: 'welcome', component: WelcomeComponent
  
  }

]
@NgModule({

  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule, routes, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule, HttpModule, SharedModule, RouterModule.forChild(routes), AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWD78mPE333DsOppmymUHAZpAB1lCX4KE',
      libraries: ["places"],


    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class HomePageModule { }
