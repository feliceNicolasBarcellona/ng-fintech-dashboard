import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementsRoutingModule } from './movements-routing.module';
import { MovementsComponent } from './movements.component';
import { MovementComponent } from './components/movement/movement.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TruncatePipe } from './components/pipes/truncate.pipe';
import { FilterByIdPipe } from './pipes/filter-by-id.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ MovementsComponent, MovementComponent, TruncatePipe, FilterByIdPipe ],
  imports: [
    CommonModule,
    MovementsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class MovementsModule { }
