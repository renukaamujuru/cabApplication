// import { DashboardModule } from './modules/dashboard.module';
// import { HomePageModule} from './modules/homePage.module';
// import { AuthModule} from './modules/auth.module';
//  import {Routes,RouterModule} from '@angular/router';
// // import { ModuleWithProviers} from '@angular/core';

// export const routes:Routes=[
// { path: '', loadChildren: './modules/homePage.module#HomePageModule'},
// { path: 'home', loadChildren: './modules/homePage.module#HomePageModule'},
// { path: 'auth', loadChildren: './modules/auth.module#AuthModule'},
// {path:'dashboard',loadChildren:'./modules/dashboard.module#DashboardModule'}
// ];
// export const appRoutingProviders: any[] = [];
// export const approutes: any=RouterModule.forRoot(routes, { useHash: true });
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { MyridesComponent } from './myrides/myrides.component';
import { Uspgbody2Component } from './uspgbody2/uspgbody2.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserpageComponent } from './userpage/userpage.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
export const route:Routes=[
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"",redirectTo:"welcome",pathMatch:"full"},
{path:"welcome",component:WelcomeComponent},
{path:"userpage",component:UserpageComponent},
{path:"uspgbody2",component:Uspgbody2Component},
{path:"forgotpassword",component:ForgotpasswordComponent},
{path:"myrides",component:MyridesComponent},
{path:"services",component:ServicesComponent},
{path:"home",component:HomeComponent}
];
export const routes:ModuleWithProviders=RouterModule.forRoot(route);