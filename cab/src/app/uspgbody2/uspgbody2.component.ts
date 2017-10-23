import { connect } from './../connect.service';
import { Component } from '@angular/core';

import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-uspgbody2',
  templateUrl: './uspgbody2.component.html',
  styleUrls: ['./uspgbody2.component.css'],
  providers: [connect]

})

export class Uspgbody2Component {
  formattedDate;
  @Input() inputedData: [{ location: String, destination: String, fare: any }]

  items = this.inputedData;
  constructor(private service: connect) {


  }
  submit(items) {
    items.username=sessionStorage.username;
    items.uid = sessionStorage.userid;
    let data = items;


    console.log(data);

    this.service.postUserEnteredData(data).subscribe(response => {
      console.log(response);
      let m = response.json();
      if (m.status == true) {
        console.log("u have posted ur loc and des and fare");
      }

    })


  }
}









