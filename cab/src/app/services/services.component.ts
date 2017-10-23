import { Component, OnInit } from '@angular/core';
// import {MapsAPILoader} from 'angular2-google-maps/core';



  

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
  google: any;
  constructor( ) { }
// autocomplete() {
//         this._loader.load().then(() => {
//             let autocomplete = new google.maps.places.Autocomplete(<HTMLInputElement>document.getElementById("autocompleteInput"), {});
//             google.maps.event.addListener(autocomplete, 'place_changed', () => {
//                 let place = autocomplete.getPlace();
//                 console.log(place);
//             });
//         });
// }
  ngOnInit() {
  }

}
