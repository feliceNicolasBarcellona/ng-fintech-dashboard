import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() contacts: Contact[] = [];
  @Output() selectContact: EventEmitter<string> = new EventEmitter();
  @Output() editContact: EventEmitter<string> = new EventEmitter();
  @Output() removeContact: EventEmitter<string> = new EventEmitter();
}
