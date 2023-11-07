import { CardsService } from 'src/app/api/cards.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/card';
import { ContactsComponent } from './components/contacts/contacts.component';
import { Contact } from 'src/app/models/contact';
import { TransferService } from 'src/app/api/transfer.service';
import { Transfer } from 'src/app/models/transfer';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  cards: Card[] = [];
  contact: Contact | null = null;
  @ViewChild('trasfer', { read: NgForm }) transfer!: NgForm;

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private cardsService: CardsService,
    private transferService: TransferService
  ) {}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe((res) => (this.cards = res));
  }

  sendMoney(transfer: NgForm) {
    const data = transfer.value;
    if (data) {
      this.transferService.transfer(data).subscribe((res) => {
        if (res) {
          this.snackBar.open('Money Sended', 'SUCCESS', { duration: 2000 });
          transfer.resetForm()
        }
      });
    }
  }

  openContactsList() {
    const dialogRef = this.dialog.open(ContactsComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((activeContact: Contact) => {
      if (activeContact) {
        this.contact = activeContact;
      }
    });
  }
}
