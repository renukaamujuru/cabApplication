import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
private navlist=[
  { 
    "name":"Home",
    "link":"/home"
  },
  {
    "name":"Services",
    "link":"/services"
  },
 
];
private userInteraction=[
  {
    "name":"Sign Up",
    "icon":"fa fa-user fa",
    "link":"/register"
  },
  {
    "name":"Sign In",
    "icon":"fa fa-user fa",
    "link":"/login"
  }
];
}
