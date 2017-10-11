import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable()
export class connect {
    private headers = new Headers({ 'Content-Type': 'appliaction/json' });
    constructor(private http: Http) {

    }
    postRegisterData(data) {
        return this.http.post('http://localhost:3456/api/register', data);
    }
    postLoginData(data) {
        return this.http.post('http://localhost:3456/api/login', data);
    }
    postForgotPasswordData(data) {
        return this.http.post('http://localhost:3456/api/forgotpassword', data);
    }
    postUserEnteredData(enteredDetails) {
        return this.http.post('http://localhost:3456/api/UserEnteredData', enteredDetails);
    }
    // getUserEnteredData(){
    //     return this.http.get('http://localhost:3456/api/getUserEnteredData');
    // }
}