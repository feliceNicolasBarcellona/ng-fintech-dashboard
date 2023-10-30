import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  contacts: Contact[] = [
    { _id: '1', name: 'Michele', surname: 'Stieven', iban: '1111111111111111' },
    { _id: '2', name: 'Fabio', surname: 'Biondi', iban: '1234123412341234' },
  ];

  constructor(public dialogRef: MatDialogRef<ContactsComponent>){}

}
