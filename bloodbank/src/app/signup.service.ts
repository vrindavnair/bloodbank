import { Injectable } from '@angular/core';
import { Signup } from './signup.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
    selectedUser:Signup;
    readonly URL="http://localhost:3000/controller1"
    constructor(public http:HttpClient) {}
      postUser(userdata:Signup){
        alert(userdata.username)
        return this.http.post(this.URL+`/signup`,userdata)
      }
     
  }
  

  

