
// import { approutes, appRoutingProviders } from './app.router';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule} from '@angular/core';
// import{HttpModule} from '@angular/http';
// import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { AgmCoreModule } from '@agm/core';



// import { AppComponent } from './app.component';


// @NgModule({

//   declarations: [
//     AppComponent,

//   ],
//   imports: [
//     BrowserModule,AngularFontAwesomeModule,approutes,FormsModule,ReactiveFormsModule,
//     BrowserAnimationsModule,HttpModule,AgmCoreModule.forRoot({
//       apiKey: 'AIzaSyBWD78mPE333DsOppmymUHAZpAB1lCX4KE',
//        libraries: ["places"]
//     })

//   ],
//   providers: [appRoutingProviders],
//   bootstrap: [AppComponent,]
// })
// export class AppModule { }



import { SharedModule } from './shared/shared.module';
import { usercabchoosingpageComponent } from './usercabchoosingpage/usercabchoosingpage.component';
import { routes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { UserpageComponent } from './userpage/userpage.component';
import { Uspgbody2Component } from './uspgbody2/uspgbody2.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './google-map/google-map.component';
import { MyridesComponent } from './myrides/myrides.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { CommentComponent } from './comment/comment.component';
import { OffersComponent } from './offers/offers.component';
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
    CommentComponent,
    OffersComponent,

  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule, routes, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule, SharedModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWD78mPE333DsOppmymUHAZpAB1lCX4KE',
      libraries: ["places"]


    })

  ],
  providers: [
],
  bootstrap: [AppComponent,
   
  ]
})
export class AppModule { }
