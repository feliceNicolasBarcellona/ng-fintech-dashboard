import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxesService {

  constructor(private http: HttpClient) { }

  transfer(data: any):Observable<boolean>{
    return this.http.post<boolean>(environment.apiUrl + 'taxes', data)
  }
}
