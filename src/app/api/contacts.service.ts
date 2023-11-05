import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(environment.apiUrl + '/contacts')
  }

  insertContact(contact: Partial<Contact>): Observable<Contact>{
    return this.http.post<Contact>(environment.apiUrl + '/contacts', contact)
  }

  updateContact(contactId: string, contact: Partial<Contact>): Observable<Contact>{
    return this.http.put<Contact>(environment.apiUrl + '/contacts/' + contactId, contact)
  }

  deleteContact(contactId: string): Observable<boolean>{
    return this.http.delete<boolean>(environment.apiUrl + '/contacts/' + contactId)
  }

}
