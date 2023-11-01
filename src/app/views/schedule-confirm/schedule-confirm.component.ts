import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface ScheduleConfirmData {
  day: string;
  time: string;
}

@Component({
  selector: 'app-schedule-confirm',
  templateUrl: './schedule-confirm.component.html',
  styleUrls: ['./schedule-confirm.component.scss']
})
export class ScheduleConfirmComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ScheduleConfirmData) {}
}
