import { Component } from '@angular/core';

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

  cardToAdd() {
    console.log('add');
  }
}
