import { connect } from './../connect.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-myrides',
  templateUrl: './myrides.component.html',
  styleUrls: ['./myrides.component.css'],
  providers: [connect]
})
export class MyridesComponent implements OnInit {

  headerData: any;
  m: any;
  n: any;
  username: any;
  // date: any;
  // dateValue;

  constructor(private ridevalues: connect) {

    // this.date = this.n.date;
    // var day = this.date.getDate();
    // var month = this.date.getMonth();
    // var year = this.date.getFullYear();
    // this.dateValue = "you selected " + day + "  " + month + " " + year;


    this.headerData = [
      {
        "name": "Name",
        "location": "Location",
        "destination": "Destination",
        "date": "Date",
        "fare": "Fare"
      }
    ]
    console.log(sessionStorage.username);
    this.username = sessionStorage.username;
    var uid = sessionStorage.userid;
    this.ridevalues.getUserEnteredData(uid).subscribe(response => {
      this.m = response.json();
      this.n = this.m.event;
      console.log(this.n);


    })
  }

  ngOnInit() {
  }

}
