import { Component, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { MatSelectionListChange } from '@angular/material/list';
import { MatDrawer } from '@angular/material/sidenav';
import { DayWithSlot } from 'src/app/models/day-with-slot';
import { DayWithSlots } from 'src/app/models/day-with-slots';
import { Location } from 'src/app/models/location';
import { ScheduleConfirmComponent } from '../schedule-confirm/schedule-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';

function dateToString(d: Date) {
  let month = '' + (d?.getMonth() + 1);
  let day = '' + d?.getDate();
  let year = d?.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  return [month, day, year].join('/');
}

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent {
  @ViewChild('pickerInput', { read: MatInput }) pickerInput!: MatInput;
  @ViewChild(MatDrawer, {static: false}) drawer!: MatDrawer;

  locationId: string | null = null;
  selectedDate: string | null = null;
  slotsFilteredByDay: number[] = [];

  locations: Location[] = [
    {
      _id: '1',
      name: 'Sede 1',
      address: 'Via dei Tali 1, Roma',
      coords: [41.9027835, 12.4963655],
      email: 'test1@test1.com',
      phone: '000 0000000',
    },
    {
      _id: '2',
      name: 'Sede 2',
      address: 'Via dei Tali 2, Roma',
      coords: [41.9027935, 12.4163155],
      email: 'test2@test2.com',
      phone: '111 1111111',
    },
    {
      _id: '3',
      name: 'Sede 3',
      address: 'Via dei Tali 3, Firenze',
      coords: [43.76956, 11.255814],
      email: 'test3@test3.com',
      phone: '222 2222222',
    },
    {
      _id: '4',
      name: 'Sede 4',
      address: 'Via dei Tali 4, Bassano del Grappa',
      coords: [45.765729, 11.727275],
      email: 'test4@test4.com',
      phone: '333 3333333',
    },
    {
      _id: '5',
      name: 'Sede 5',
      address: 'Via dei Tali 5, Cagliari',
      coords: [39.223841, 9.121661],
      email: 'test5@test5.com',
      phone: '444 4444444',
    },
  ];

  daysWithSlots: DayWithSlots[] = [
    { _id: '1', day: '11/21/2023', slots: [11, 12, 18] },
    { _id: '1', day: '11/19/2023', slots: [9, 11, 12, 14, 16] },
    { _id: '1', day: '11/23/2023', slots: [11, 12, 18] },
    { _id: '1', day: '11/26/2023', slots: [10, 12, 16] },
    { _id: '1', day: '11/20/2023', slots: [12, 15, 16, 17] },
    { _id: '1', day: '11/6/2023', slots: [11, 12, 14] },
    { _id: '1', day: '11/1/2023', slots: [11, 14, 16] },
    { _id: '1', day: '11/24/2023', slots: [9, 16, 17] },
    { _id: '1', day: '11/29/2023', slots: [10, 13, 18] },
    { _id: '1', day: '11/12/2023', slots: [10, 12, 17] },
    { _id: '1', day: '11/5/2023', slots: [13, 15, 16, 17] },
    { _id: '1', day: '11/13/2023', slots: [10, 13, 15, 16, 17] },
    { _id: '1', day: '11/22/2023', slots: [11, 12, 13] },
    { _id: '1', day: '11/7/2023', slots: [12, 13, 14, 15, 16] },
    { _id: '2', day: '11/1/2023', slots: [13, 17] },
    { _id: '2', day: '11/3/2023', slots: [11, 13, 17] },
    { _id: '2', day: '11/18/2023', slots: [11, 12, 16] },
    { _id: '2', day: '11/12/2023', slots: [10, 11, 13, 16, 17] },
    { _id: '2', day: '11/4/2023', slots: [9, 14, 15] },
    { _id: '2', day: '11/27/2023', slots: [11, 12, 15, 17] },
    { _id: '2', day: '11/17/2023', slots: [11, 14, 16] },
    { _id: '2', day: '11/26/2023', slots: [9, 11, 16, 18] },
    { _id: '2', day: '11/22/2023', slots: [13, 17] },
    { _id: '2', day: '11/9/2023', slots: [9, 12, 15] },
    { _id: '2', day: '11/25/2023', slots: [10, 13, 17, 18] },
    { _id: '2', day: '11/30/2023', slots: [11, 12, 16] },
    { _id: '2', day: '11/10/2023', slots: [9, 14, 16] },
    { _id: '2', day: '11/15/2023', slots: [9, 16, 18] },
    { _id: '2', day: '11/11/2023', slots: [10, 11, 13, 14, 17] },
  ];

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar){}

  selectedLocation(location: Location, drawer: MatDrawer) {
    this.locationId = location._id;
    this.pickerInput.value = null;
    this.selectedDate = null;
    drawer.open();
  }

  myFilter = (date: Date | null): boolean => {
    if (!date || !this.locationId) {
      return true;
    }

    const dateStr = dateToString(date);

    const filteredSlots = this.daysWithSlots.some(
      (slot) => slot.day === dateStr && slot._id === this.locationId
    );

    return filteredSlots;
  };

  filterSlots() {
    if (this.locationId && this.selectedDate) {
      const matchedSlots = this.daysWithSlots.find(
        (slot) => slot._id === this.locationId && slot.day === this.selectedDate
      );
      this.slotsFilteredByDay = matchedSlots ? matchedSlots.slots : [];
    } else {
      this.slotsFilteredByDay = [];
    }
  }

  onChangeLocation(event: MatDatepickerInputEvent<any>) {
    this.selectedDate = dateToString(event.value);
    this.filterSlots();
  }

  onSelectionChange(e: MatSelectionListChange): void {
    const confirmDialog = this.dialog.open(ScheduleConfirmComponent, {
      data: {
        day: this.selectedDate,
        time: e.source.selectedOptions.selected[0].value,
      },
    });

    confirmDialog.afterClosed().subscribe((confirm) => {
      if (confirm) {
        const selectedSlot: DayWithSlot = {
          day: this.selectedDate as string,
          slot: e.source.selectedOptions.selected[0].value,
        };
        this.snackBar.open('Appuntamento confermato', '', {
          duration: 2000
        });
        this.drawer.close()
      }
    });
  }
}
