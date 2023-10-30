import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() contacts: Contact[] = [];
  @Output() selectContact: EventEmitter<Contact> = new EventEmitter();
  @Output() editContact: EventEmitter<Contact> = new EventEmitter();
  @Output() removeContact: EventEmitter<string> = new EventEmitter();
}
