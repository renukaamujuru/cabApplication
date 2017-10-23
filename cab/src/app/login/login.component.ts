import { connect } from './../connect.service';
import { routes } from './../app.router';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [connect]
})
export class LoginComponent implements OnInit {

  constructor(private service: connect, private routes: Router) { }

  ngOnInit() {
  }
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(30)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)
    ])
  });
  get email() {
    return this.form.get('email');
  };
  get password() {
    return this.form.get('password');
  }
  onSubmit(form) {
    let data = form.value;
    this.service.postLoginData(data).subscribe(response => {
      console.log(response);
      let m = response.json();
      sessionStorage.userid = m.obj._id;
      sessionStorage.username = m.obj.username;
      
      console.log(sessionStorage.username);
      if (m.status == true) {
        alert("login successful");
        this.routes.navigate(['/userpage']);
      }
      else {
        alert("check your login credentials");
      }
    });

  }
}
