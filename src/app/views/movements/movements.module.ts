import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementsRoutingModule } from './movements-routing.module';
import { MovementsComponent } from './movements.component';
import { MovementComponent } from './components/movement/movement.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [ MovementsComponent, MovementComponent],
  imports: [
    CommonModule,
    MovementsRoutingModule,
    MaterialModule
  ]
})
export class MovementsModule { }
