import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact';
import { contacts } from 'src/mock-contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  visible: boolean = true;

  activeContact: Contact | null = null;

  contacts: Contact[] = contacts

  constructor(public dialogRef: MatDialogRef<ContactsComponent>) {}

  selectedContact(contact: Contact) {
    this.dialogRef.close(contact);
  }

  deletedContact(_id: string) {
    this.contacts = this.contacts.filter((el) => el._id !== _id);
  }

  saveHandler(contact: Contact) {
    if (this.activeContact) {
      this.editedContact(contact);
    } else {
      this.savedContact(contact);
    }
  }

  savedContact(contact: Contact) {
    this.contacts = [
      ...this.contacts,
      {
        _id: Math.random().toString(),
        name: contact.name,
        surname: contact.surname,
        iban: contact.iban,
      },
    ];
    this.toggleModal();
  }

  editedContact(contact: Contact) {
    const index = this.contacts.findIndex(
      (el) => el._id === this.activeContact?._id
    );
    this.activeContact = contact;
    this.contacts[index] = contact;
    this.toggleModal();
  }

  toggleModal() {
    this.visible = !this.visible;
    if (this.visible) {
      this.activeContact = null;
    }
  }
}
