import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dplogin } from './dplogin.model';

@Injectable({
  providedIn: 'root'
})
export class DpService {

  
    selectedUser:Dplogin
  
  readonly URL="http://localhost:3000/controller1"

  
  

  constructor(public http:HttpClient) {}
    postDonar(donardata:Dplogin){
      alert(donardata.username)
      return this.http.post(this.URL+`/post`,donardata)
    }
    postPatient(patientdata:Dplogin){
      alert(patientdata.username)

      return this.http.post(this.URL+`/postp`,patientdata)
    }
   
   
   }

