import { AppointmentsService } from './../../api/appointments.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { MatSelectionListChange } from '@angular/material/list';
import { MatDrawer } from '@angular/material/sidenav';
import { DayWithSlot } from 'src/app/models/day-with-slot';
import { DayWithSlots } from 'src/app/models/day-with-slots';
import { ScheduleConfirmComponent } from './components/schedule-confirm/schedule-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from 'src/app/models/location';

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
export class AppointmentsComponent implements OnInit {
  @ViewChild('pickerInput', { read: MatInput }) pickerInput!: MatInput;
  @ViewChild(MatDrawer, { static: false }) drawer!: MatDrawer;

  locationId: string | null = null;
  selectedDate: string | null = null;
  slotsFilteredByDay: number[] = [];
  zoom: number = 25;
  coords: number[] = [0, 0];

  locations: Location[] = [];

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

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private appointmentsService: AppointmentsService
  ) {}

  ngOnInit(): void {
    this.appointmentsService.getLocations().subscribe(res => this.locations = res)

  }

  selectedLocation(location: Location, drawer: MatDrawer) {
    this.locationId = location._id;
    this.coords = location.coords;
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
          duration: 2000,
        });
        this.drawer.close();
      }
    });
  }
}
