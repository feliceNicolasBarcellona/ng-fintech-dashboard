import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/api/cards.service';
import { Card } from 'src/app/models/card';
import { Movement } from 'src/app/models/movement';
import { GetMovements } from 'src/app/models/utils';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss'],
})
export class MovementsComponent implements OnInit {

  cardSelected: string = '';

  cards: Card[] = [];

  movements: any[] = [];

  constructor(private cardsService: CardsService){}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe(cards => this.cards = cards)
  }

  onChange(selectCard: string) {
    this.cardSelected = selectCard;

    this.cardsService.getMovements(this.cardSelected, 0, 0).subscribe((res: any) => this.movements = res
    )
    this.loadedElements = 5
  }

  loadedElements: number = 5;

  loadMoreElements() {
    this.loadedElements += 5;
  }
}
