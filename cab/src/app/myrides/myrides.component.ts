import { connect } from './../connect.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-myrides',
  templateUrl: './myrides.component.html',
  styleUrls: ['./myrides.component.css'],
  providers:[connect]
})
export class MyridesComponent implements OnInit {
  headerData: any;
  
  constructor(private service: connect) {

    this.headerData = [
      {
        "name": "Name",
        "location": "Location",
        "destination": "Destination",
        "date": "Date",
        "fare": "Fare"
      }
    ]


  }
// getData(){
//   this.service.getUserEnteredData().subscribe(response=>{
//     console.log(response);
//     let m=response.json();
//     if(m == true){
//      console.log(m);
//     }
//   })
// }
  ngOnInit() {
  }

}
