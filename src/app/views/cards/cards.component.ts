import { CardsService } from './../../api/cards.service';
import { CardForm } from './../../models/card-form';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/card';
import { CardFormComponent } from './components/card-form/card-form.component';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @ViewChild(CardFormComponent) child!: CardFormComponent;
  @ViewChild(MatDrawer) drawer!: MatDrawer;

  cards: Card[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private cardsService: CardsService
  ) {}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe((cards) => (this.cards = cards));
  }

  cardToRemove(_id: string) {
    if(_id){
      this.cardsService.deleteCard(_id).subscribe(res => {
        this.cards = this.cards.filter(el => el._id !== _id);
        this.snackBar.open('Card Removed', 'SUCCESS', { duration: 2000 });
      })
    }
  }

  cardToAdd(card: CardForm) {
    if (card) {
      this.cardsService.insertCard(card).subscribe((card) => {
        if (this.cards) {
          this.cards = [...this.cards, card];
          this.snackBar.open('Card Added', 'SUCCESS', { duration: 2000 });
          this.dispose();
        }
      });
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
