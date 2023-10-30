import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/card';
import { ContactsComponent } from '../contacts/contacts.component';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent {
  cards: Card[] = [
    {
      _id: '4cb9292a-5a36-453b-85a3-1750597f7603',
      number: '1111111111111111',
      ownerId: 'et45er5e6fba',
      owner: 'Mario Rossi',
      type: 'mastercard',
      amount: 500,
    },
    {
      _id: '4eaccf5b-d6b7-4630-9859-c9bbebffa095',
      number: '2222222222222222',
      ownerId: 'et45er5e6fba',
      owner: 'Mario Rossi',
      type: 'visa',
      amount: 250000,
    },
  ];

  contact: Contact | null = null

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {}

  sendMoney(transfer: NgForm) {
    console.log(transfer.value);
    this.snackBar.open('Money Sended', 'SUCCESS', { duration: 2000 });
  }

  openContactsList() {
    const dialogRef = this.dialog.open(ContactsComponent, {
      height: 'auto',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((activeContact: Contact) => {
      if(activeContact){
        this.contact = activeContact
      }
    })
  }
}
