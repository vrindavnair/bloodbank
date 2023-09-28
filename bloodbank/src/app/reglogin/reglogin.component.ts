import { Component } from '@angular/core';
import { DpService } from '../dp.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-reglogin',
  templateUrl: './reglogin.component.html',
  styleUrls: ['./reglogin.component.css'],
  providers:[DpService]
})
export class RegloginComponent {
  msg:any
  constructor(public serviceform:DpService,public router:Router){
  
  }
  ngOnit(){
    this.resetform();
  }
  resetform(form?:NgForm){
    if(form)
    form.reset()
  this.serviceform.selectedUser={
    username:"",
    email:"",
    mob:"",
    pass:"",
    cpass:"",

  }
}
  onSubmit(form:NgForm){
    this.serviceform.postDonar(form.value).subscribe((res)=>{
      this.router.navigateByUrl('/signup')
    })
  }
  loginSubmit(form:NgForm){
    this.serviceform.postPatient(form.value).subscribe((res)=>{
      this.router.navigateByUrl('/signup')
    })
  }
}
 



  
   


  
    
    















 




