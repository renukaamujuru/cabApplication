import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
private date;

  constructor() { 
   

  }

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
  {
    "name":"myrides",
    "link":"/myrides"
  }
  

];
private rightitems=[
  {
    
    "name":"logout",
    "link":"/welcome"
  
  }
]
  
}
