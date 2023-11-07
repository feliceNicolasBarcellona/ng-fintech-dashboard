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
import { dateToString } from './helper/date.helper';


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

  daysWithSlots: DayWithSlots[] = [];

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private appointmentsService: AppointmentsService
  ) {}

  ngOnInit(): void {
    this.appointmentsService
      .getLocations()
      .subscribe((res) => (this.locations = res));
  }

  selectedLocation(location: Location, drawer: MatDrawer) {
    this.locationId = location._id;
    this.coords = location.coords;
    this.appointmentsService
      .getSlotsById(this.locationId)
      .subscribe((slots) => { this.daysWithSlots = slots;
      });

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
      (slot) => slot.day === dateStr
    );

    return filteredSlots;
  };

  filterSlots() {
    if (this.locationId && this.selectedDate) {
      const matchedSlots = this.daysWithSlots.find(
        (slot) => slot.day === this.selectedDate
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
        const dayWithSlot: DayWithSlot = {
          day: this.selectedDate as string,
          slot: e.source.selectedOptions.selected[0].value,
        };
        this.appointmentsService.schedule(dayWithSlot).subscribe(res => res)
        this.snackBar.open('Appuntamento confermato', '', {
          duration: 2000,
        });
        this.drawer.close();
      }
    });
  }
}
