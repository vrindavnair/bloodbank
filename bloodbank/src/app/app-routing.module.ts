import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CarocelComponent } from './carocel/carocel.component';
import { RegloginComponent } from './reglogin/reglogin.component';
import { DonarComponent } from './donar/donar.component';
import { DonarhomeModule } from './donarhome/donarhome.module';
import { HomeComponent } from './donarhome/home/home.component';
import { DonarRequestModule } from './donar-request/donar-request.module';
import { RequestComponent } from './donar-request/request/request.component';
import { StatusComponent } from './donarstatus/status/status.component';
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



const routes: Routes = [

  {path:'footer',component: FooterComponent},
  {path:'header',component: HeaderComponent},
  {path:'',component: CarocelComponent},
  {path:'reglogin',component: RegloginComponent},
  {path:'donar',component:DonarComponent},
 {path:'admin',component:AdminComponent},
 {path:'about',component:AboutComponent},
 {path:'contactas',component:ContactasComponent},
 {path:'signup',component:SignupComponent},
 {path:'patient',component:PatientComponent},



{path:'donar',
component:DonarComponent,
children:[
  {
    path:'home',
    component:HomeComponent
  },
  {path:'request',
  component:RequestComponent},
  {path:'status',
  component:StatusComponent}
]},


{path:'admin',component:AdminComponent,
children:[
  {path:'adminhome',component:AdminhomeComponent},
  {path:'admindetails',component:AdmindetailsComponent},
  {path:'admindonation',component:AdmindonationComponent},
  {path:'adminpatient',component:AdminpatientComponent},
  {path:'adminbldreq',component:AdminbldreqComponent},
  {path:'adminstkreq',component:AdminstkreqComponent}
]},
{path:'patient',component:PatientComponent,
children:[
  {path:'patienthome',component:PatienthomeComponent},
  {path:'patientbldreq',component:PatientbldreqComponent},
  {path:'patientstatus',component:PatientstatusComponent},

]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
