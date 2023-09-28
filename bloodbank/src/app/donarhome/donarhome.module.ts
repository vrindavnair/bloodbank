import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DonarhomeRoutingModule } from './donarhome-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,DonarhomeRoutingModule
  ]
})
export class DonarhomeModule { }
