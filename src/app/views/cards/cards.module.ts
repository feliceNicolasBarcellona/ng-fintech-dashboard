import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './cards.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { CardListComponent } from './components/card-list/card-list.component';


@NgModule({
  declarations: [ CardsComponent, CardFormComponent, CardListComponent],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CardsModule { }
