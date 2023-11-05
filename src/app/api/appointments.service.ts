import { DayWithSlot } from './../models/day-with-slot';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DayWithSlots } from '../models/day-with-slots';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(environment.apiUrl + '/locations');
  }

  getSlotsById(locationId: string): Observable<DayWithSlots[]>{
    return this.http.get<DayWithSlots[]>(environment.apiUrl + '/slots/' + locationId)
  }

  schedule(dayWithSlot: DayWithSlot): Observable<boolean>{
    return this.http.post<boolean>(environment.apiUrl + '/schedule', dayWithSlot)
  }
}
