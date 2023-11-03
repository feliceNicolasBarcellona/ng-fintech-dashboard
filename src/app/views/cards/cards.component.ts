import { CardForm } from './../../models/card-form';
import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/card';
import { CardFormComponent } from './components/card-form/card-form.component';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {

  @ViewChild(CardFormComponent) child!: CardFormComponent;
  @ViewChild(MatDrawer) drawer!: MatDrawer;

  cards: Card[] = [
    {
      _id: '7cc1c203-e1c4-42be-bdb3-9f107c1611e1',
      number: '0000 0000 0000 0000',
      ownerId: 'et45er5e6fba',
      owner: 'Mario Rossi',
      type: 'visa',
      amount: 15000,
    },
    {
      _id: '951e712c-a654-4c76-a2d5-c258f2ad9084',
      number: '1111 1111 1111 1111',
      ownerId: 'et45er5e6fba',
      owner: 'Mario Rossi',
      type: 'mastercard',
      amount: 500,
    },
    {
      _id: 'c942ba45-5dba-4300-9083-c0f0a17d869e',
      number: '2222 2222 2222 2222',
      ownerId: 'et45er5e6fba',
      owner: 'Mario Rossi',
      type: 'visa',
      amount: 250000,
    },
  ];

  constructor(private snackBar: MatSnackBar) {}

  cardToRemove(_id: string) {
    this.cards = this.cards.filter((el) => el._id !== _id);
    this.snackBar.open('Card Removed', 'SUCCESS', { duration: 2000 });
  }

  cardToAdd(cardForm: CardForm) {
    if (cardForm) {
      this.cards = [
        ...this.cards,
        {
          _id: Math.random().toString(),
          number: cardForm?.number,
          ownerId: Math.random().toString(),
          owner: 'Mario Rossi',
          type: cardForm?.type,
          amount: 250000,
        },
      ];
      this.snackBar.open('Card Added', 'SUCCESS', {
        duration: 2000
      });

      this.dispose()
    }
  }

   dispose() {
    this.child.cleanup();
    this.drawer.close();
  }

  transactionsToCheck(_id: string) {
    //TODO
  }
}
