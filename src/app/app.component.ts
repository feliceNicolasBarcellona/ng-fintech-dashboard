import { Component } from '@angular/core';
import { CardForm } from './models/card-form';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  transactionsToCheck(_id: string) {
    console.log(_id, 'transactionsToCheck');
  }

  cardToRemove(_id: string) {
    console.log(_id, 'cardToRemove');
  }

  cardToAdd(event: CardForm) {
    if (event) {
      console.log('add', event);
    }
  }

  onCancel() {
    console.log('cancel');
  }
}
