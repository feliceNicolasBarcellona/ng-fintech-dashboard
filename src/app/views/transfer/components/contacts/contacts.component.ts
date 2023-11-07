import { ContactsService } from './../../../../api/contacts.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact';
import { contacts } from 'src/mock-contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  visible: boolean = true;

  activeContact: Contact | null = null;

  contacts: Contact[] = []

  constructor(public dialogRef: MatDialogRef<ContactsComponent>, private contactsService: ContactsService) {}


  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(res => this.contacts = res)
  }

  selectedContact(contact: Contact) {
    this.activeContact = contact
    this.dialogRef.close(contact);
  }

  deletedContact(contactId: string) {
    this.contactsService.deleteContact(contactId).subscribe(_ => {
      this.contacts = this.contacts.filter(el => el._id !== contactId)
    })
  }

  saveHandler(contact: Contact) {
    if (this.activeContact) {
      this.editedContact(contact);
    } else {
      this.savedContact(contact);
    }
  }

  savedContact(contact: Contact) {
    if(contact){
      this.contactsService.insertContact(contact).subscribe(contact => {
        if(this.contacts){
          this.contacts = [...this.contacts, contact];
          this.toggleModal();
        }
      })
    }
  }

  editedContact(contact: Contact) {

    const contactId = this.contacts.find(contact => contact._id === contact._id);

    if (!contactId) {
      return;
    }

    this.contactsService.updateContact(contactId._id, contact)
      .subscribe(
        updatedContact => {
          const index = this.contacts.findIndex(el => el._id === contactId._id);
          this.contacts[index] = updatedContact;
          this.activeContact = updatedContact;
          this.toggleModal();
        },
      );
  }


  toggleModal() {
    this.visible = !this.visible;
    if (this.visible) {
      this.activeContact = null;
    }
  }
}
