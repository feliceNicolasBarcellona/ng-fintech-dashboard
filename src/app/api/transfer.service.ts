import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transfer } from '../models/transfer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http: HttpClient) { }

  transfer(transfer: Transfer): Observable<boolean>{
    return this.http.post<boolean>(environment.apiUrl + '/transfer', transfer)
  }

}
