import { Component, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Output() checkTransactions: EventEmitter<string> = new EventEmitter();
  @Output() removeCard: EventEmitter<string> = new EventEmitter();
  @Output() addCard: EventEmitter<void> = new EventEmitter();

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
}
