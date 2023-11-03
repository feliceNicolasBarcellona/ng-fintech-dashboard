import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CardForm } from 'src/app/models/card-form';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {

  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() addCard: EventEmitter<CardForm> = new EventEmitter();
  @ViewChild('cardForm', { read: NgForm }) cardForm!: NgForm;

  types: string[] = ['Visa', 'Mastercard'];

  onSubmit() {
    if (this.cardForm.valid) {
      this.addCard.emit(this.cardForm.value);
    } else {
      console.log('invalid');
    }
  }

  public cleanup() {
    this.cardForm.resetForm();
  }

}
