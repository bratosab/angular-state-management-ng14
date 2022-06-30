import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Choice } from './models/choice.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  post(): Observable<boolean> {
    return of(Math.random() >= 0.5).pipe(delay(2000));
  }

  get(): Observable<Choice[]> {
    return of([
      { name: 'tomatoes', price: 1.5 },
      { name: 'bacon', price: 5 },
      { name: 'olives', price: 3 },
      { name: 'cheese', price: 4 },
      { name: 'beer', price: 10 },
    ])
  }
}
