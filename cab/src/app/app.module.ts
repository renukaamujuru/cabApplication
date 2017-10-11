import { SharedModule } from './shared/shared.module';
import { usercabchoosingpageComponent } from './usercabchoosingpage/usercabchoosingpage.component';
import { routes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import{HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MatDatepickerModule, MdNativeDateModule} from '@angular/material';
import { UserpageComponent } from './userpage/userpage.component';
import { Uspgbody2Component } from './uspgbody2/uspgbody2.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './google-map/google-map.component';
import { MyridesComponent } from './myrides/myrides.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { DateFormatPipe } from "angular2-moment";
@NgModule({

  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    RegisterComponent,
    LoginComponent,
    UserpageComponent,
    usercabchoosingpageComponent,
    Uspgbody2Component,
    ForgotpasswordComponent,
    GoogleMapComponent,
    MyridesComponent,
    ServicesComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule,routes,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule, MdButtonModule, MdCheckboxModule, MatDatepickerModule,
    MdNativeDateModule,HttpModule,SharedModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWD78mPE333DsOppmymUHAZpAB1lCX4KE',
       libraries: ["places"]
   
    
    })
    
  ],
  providers: [DateFormatPipe],
  bootstrap: [AppComponent,]
})
export class AppModule { }
