import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  @Input() initialContact: Contact | null = null;
  @Output() saveContact: EventEmitter<Contact> = new EventEmitter();

  onSave(contact: NgForm) {
    this.saveContact.emit(contact.value as Contact);
  }
}
