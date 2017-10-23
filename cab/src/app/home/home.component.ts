import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username = sessionStorage.username;
  sectionName: String;
  likevalue: any;
  count = 0;
  disabled = false;
  constructor() {
  }

  ngOnInit() {
  }

  likeOutput() {
    if (this.count >=1) {
      this.likevalue = "you have liked";
      this.disabled = true;
    }
    this.count++;
  }
  rateNowOutput(){
    
  }
  loadPage(pageName: String) {
    if (pageName == 'comment') {
      this.sectionName = ""
    }
  }

}