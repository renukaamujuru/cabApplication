import { routes } from './../app.router';
import { connect } from './../connect.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [connect]
})
export class RegisterComponent implements OnInit {
result;
  constructor(private service: connect, private routes: Router) { }

  ngOnInit() {
  }
  form = new FormGroup({

    username: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)

      ]
    ),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(30)]
    ),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)
    ]),
    confirm: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10)

    ]),
  });
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  get email() {
    return this.form.get('email');
  }
  get phoneNumber() {
    return this.form.get('phoneNumber');
  }
  onSubmit(form) {
    let data = form.value;
    this.service.postRegisterData(data).subscribe(response => {
      console.log(response);
      let m = response.json();
      if (m.status == true) {
        this.result="registration successful";
        this.routes.navigate(['/login']);
      }


    })
  }


}
