import { NgModule, Component } from '@angular/core';
import {HttpModule} from '@angular/http';
//  import { approutes } from '../app.router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { Routes, RouterModule }      from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from '../app.component';




import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';

// import { DateFormatPipe } from "angular2-moment";


const routes: Routes = [
   { path: '',       component: LoginComponent },
   {path:'login',         component:LoginComponent},
   {path:'register' , component: RegisterComponent},
   {path:'forgotpassword', component:ForgotpasswordComponent}
];
@NgModule({

  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,HttpModule,SharedModule, RouterModule.forChild(routes),AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWD78mPE333DsOppmymUHAZpAB1lCX4KE',
       libraries: ["places"]
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AuthModule { }
