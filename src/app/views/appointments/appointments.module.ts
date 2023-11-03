import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentsMapComponent } from './components/appointments-map/appointments-map.component';


@NgModule({
  declarations: [ AppointmentsComponent, AppointmentsMapComponent ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    MaterialModule
  ]
})
export class AppointmentsModule { }
