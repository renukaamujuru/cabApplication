import { connect } from './../connect.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-usercabchoosingpage',
  templateUrl: './usercabchoosingpage.component.html',
  styleUrls: ['./usercabchoosingpage.component.css'],
  providers: [connect]
})


export class usercabchoosingpageComponent implements OnInit {

  list = ["user entered data"];
  fare: any;
  locationName: String;
  destinationValue: String;
  enteredDetails: [{ location: String, destination: String, fare: any}];
  images: any;
  toggoleShowHide: String;
  changeColor: any;
  // dateValue: any;
  constructor(private service: connect) {

    this.images = [
      {
        "index": "1",
        "img": "/assets/image/m1.jpg",
        "name": "Micro",

      },
      {
        "index": "2",
        "img": "/assets/image/m2.png",
        "name": "Mini"
      },
      {
        "index": "3",
        "img": "/assets/image/m3.jpg",
        "name": "lux"
      },
    ]

  }

  ngOnInit() {
  }
  
  // onChange(event) {
  //   console.log(event);
  //   let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  //   var day = event.value.getDate();
  //   var month = event.value.getMonth();
  //   var year = event.value.getFullYear();
  //   this.dateValue = "you selected "+day + "  " + months[month] + " " + year;
  // }



  checkfare(e) {
    console.log(e);
    if (e == "Micro") {
      this.fare = "40";
    }
    if (e == "Mini") {
      this.fare = "60"
    }
    if (e == "lux") {
      this.fare = "100"
    }
  }



  form = new FormGroup({
    location: new FormControl('', [
      Validators.required,
    ]
    ),
    destination: new FormControl('',
      [
        Validators.required
      ]),
    btn: new FormControl(''
    )
  })

  get location() {
    return this.form.get('location');
  }
  get destination() {
    return this.form.get('destination');
  }

  change(e) {
    this.changeColor = "green";
  }


  submit(form) {
    let data = form.value;

    this.enteredDetails = [{
      location: this.locationName,
      destination: this.destinationValue,
      fare: this.fare,
      // dateValue: this.dateValue
    }];
    console.log(this.enteredDetails);
    this.toggoleShowHide = "visible";
    this.service.postUserEnteredData(this.enteredDetails).subscribe(response=>{
      console.log(response);
      let m=response.json();
      if(m.status==true){
        console.log("u have posted ur loc and des");
      }
     
      })

  }

}
