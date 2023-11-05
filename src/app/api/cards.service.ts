import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Card } from '../models/card';
import { CardForm } from '../models/card-form';
import { Movement } from '../models/movement';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(environment.apiUrl + '/cards')
  }

  insertCard(card: CardForm): Observable<Card>{
    return this.http.post<Card>(environment.apiUrl + '/cards', card)
  }

  deleteCard(cardId: string):Observable<boolean>{
    return this.http.delete<boolean>(environment.apiUrl + '/cards/' + cardId)
  }

  getMovements(cardId: string, limit: number, offset: number): Observable<Movement[]>{
    const params = new HttpParams({ fromObject: {limit,offset}})
    return this.http.get<Movement[]>(environment.apiUrl + '/cards/' + cardId + '/movements/', { params })
  }

}
