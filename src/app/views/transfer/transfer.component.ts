import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/card';

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

  constructor(private snackBar: MatSnackBar) {}

  sendMoney(transfer: NgForm) {
    console.log(transfer.value);
    this.snackBar.open('Money Sended', 'SUCCESS', { duration: 2000 });
  }
}
