import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { DonarstatusRoutingModule } from './status/donarstatus-routing.module';





@NgModule({
  declarations: [
    StatusComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class DonarstatusModule { }
