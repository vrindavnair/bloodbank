import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CarocelComponent } from './carocel/carocel.component';
import { RegloginComponent } from './reglogin/reglogin.component';
import { DonarComponent } from './donar/donar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminpatientComponent } from './adminpatient/adminpatient.component';
import { AdmindonationComponent } from './admindonation/admindonation.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { AdminbldreqComponent } from './adminbldreq/adminbldreq.component';
import { AdminstkreqComponent } from './adminstkreq/adminstkreq.component';
import { AboutComponent } from './about/about.component';
import { ContactasComponent } from './contactas/contactas.component';
import { SignupComponent } from './signup/signup.component';
import { PatientComponent } from './patient/patient.component';
import { PatienthomeComponent } from './patienthome/patienthome.component';
import { PatientbldreqComponent } from './patientbldreq/patientbldreq.component';
import { PatientstatusComponent } from './patientstatus/patientstatus.component';
import{FormsModule} from '@angular/forms';
import{HttpClientModule}from '@angular/common/http'






@NgModule({
  declarations: [
    AppComponent,
    
    FooterComponent,
    HeaderComponent,

    CarocelComponent,
    RegloginComponent,
    
    DonarComponent,
   
    AdminComponent,
        AdminhomeComponent,
        AdminpatientComponent,
        AdmindonationComponent,
        AdmindetailsComponent,
        AdminbldreqComponent,
        AdminstkreqComponent,
        AboutComponent,
        ContactasComponent,
        SignupComponent,
        PatientComponent,
        PatienthomeComponent,
        PatientbldreqComponent,
        PatientstatusComponent,
        
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
