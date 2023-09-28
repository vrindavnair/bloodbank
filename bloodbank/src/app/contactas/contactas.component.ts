import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contactas',
  templateUrl: './contactas.component.html',
  styleUrls: ['./contactas.component.css'],
  providers:[ContactService]
})
export class ContactasComponent {
  constructor(public serviceform1:ContactService,public router:Router){

  }
  ngOnit(){
    this.resetform();
  }
  resetform(form?:NgForm){
    if(form)
    form.reset()
  this.serviceform1.selectedUser={
    lname:"",
    email:"",
    mob:"",
    mesg:""

  }
  }
  fun1(form:NgForm){
    this.serviceform1.postUser(form.value).subscribe((res)=>{
      this.router.navigateByUrl('/')
    })
  }


}
