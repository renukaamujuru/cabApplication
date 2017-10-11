
import { Component, OnInit } from '@angular/core';

import { Input, Output, EventEmitter } from '@angular/core';
import { DateFormatPipe } from "angular2-moment";
@Component({
  selector: 'app-uspgbody2',
  templateUrl: './uspgbody2.component.html',
  styleUrls: ['./uspgbody2.component.css'],


})

export class Uspgbody2Component implements OnInit {
formattedDate;
  @Input() inputedData: [{ location: String, destination: String, fare: any }]


  constructor(public dfp: DateFormatPipe) {

    let raw = new Date(2015, 1, 12);
    this.formattedDate = dfp.transform(raw, 'D MMM YYYY');
  }
  ngOnInit() {
  }

}










