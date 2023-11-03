import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { TransferComponent } from './transfer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactsComponent } from './components/contacts/contacts.component';


@NgModule({
  declarations: [ TransferComponent, ContactFormComponent, ContactListComponent, ContactsComponent ],
  imports: [
    CommonModule,
    TransferRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class TransferModule { }
