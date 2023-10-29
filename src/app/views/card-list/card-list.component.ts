import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() cards: Card[] = [];
  @Output() checkTransactions: EventEmitter<string> = new EventEmitter();
  @Output() removeCard: EventEmitter<string> = new EventEmitter();
  @Output() addCard: EventEmitter<void> = new EventEmitter();
}
