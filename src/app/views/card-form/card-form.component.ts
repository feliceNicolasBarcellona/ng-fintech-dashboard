import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { CardForm } from 'src/app/models/card-form';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() addCard: EventEmitter<CardForm> = new EventEmitter();

  types: string[] = ['Visa', 'Mastercard'];

  onSubmit(cardForm: NgForm) {
    if (cardForm.valid) {
      this.addCard.emit(cardForm.value as CardForm);
    } else {
      console.log('invalid');
    }
  }

  public cleanUp (cardForm: NgForm){
    cardForm.reset()
  }

}
