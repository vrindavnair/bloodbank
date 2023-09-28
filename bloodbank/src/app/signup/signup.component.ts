import { Component } from '@angular/core';
import { SignupService } from '../signup.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[SignupService]
})
export class SignupComponent {
  msg:any
  constructor(public serviceform2:SignupService,public router:Router){
  }
  ngOnit(){
    this.resetform();
  }
  resetform(form?:NgForm){
    if(form)
    form.reset()
  this.serviceform2.selectedUser={
    username:"",
    pass:"",
   

  }
  }
  fun1(form:NgForm){
    this.serviceform2.postUser(form.value).subscribe((res)=>{
      if(res==1){
        this.router.navigateByUrl('/donar')
      }
      else if(res==2){
        this.router.navigateByUrl('/patient')
      }
      else{
        this.msg="Invalid User"
      }
      
    });
  }
}





