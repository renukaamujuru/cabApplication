import { routes } from './../app.router';
import { Router } from '@angular/router';
import { connect } from './../connect.service';
import { FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
  providers:[connect]
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private service:connect,private routes:Router) { }

  ngOnInit() {
  }
  form=new FormGroup({
    email:new FormControl('',
    [
      Validators.required
    
    ])
  });
  get email(){
  return this.form.get('email');
};
submit(form){
  let data=form.value;
  console.log(data);
  this.service.postForgotPasswordData(data).subscribe(response=>{
    console.log(response);
    let m=response.json();
    if(m.status == true){
      alert("your message sent to mail you can change password there");
      this.routes.navigate(['/welcome']);
    }
  })
}
}
