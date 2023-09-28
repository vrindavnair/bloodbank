import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  selectedUser:any=Contact;
  // user:any[]=Contact[];
  readonly URL="http://localhost:3000/contact"

  
  

  constructor(public http:HttpClient) {}
    postUser(userdata:Contact){
      return this.http.post(this.URL+`/post`,userdata)
    }
   
}
