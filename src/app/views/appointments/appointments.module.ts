import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';

import { AppointmentsComponent } from './appointments.component';
import { AppointmentsMapComponent } from './components/appointments-map/appointments-map.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ScheduleConfirmComponent } from './components/schedule-confirm/schedule-confirm.component';


@NgModule({
  declarations: [ AppointmentsComponent, AppointmentsMapComponent, ScheduleConfirmComponent ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class AppointmentsModule { }
