import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTopping } from '../salad.actions';
import { NamePrice, SaladState } from '../salad.reducers';

@Component({
  selector: 'app-topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.scss']
})
export class ToppingListComponent implements OnInit {
  toppings$: Observable<NamePrice[]>;
  choices$: Observable<NamePrice[]>;

  constructor(private store: Store<{ salad: SaladState }>) { }

  ngOnInit(): void {
    this.toppings$ = this.store.select((state) => state.salad.toppings);
    this.choices$ = this.store.select((state) => state.salad.choices);
  }

  add(choice: NamePrice) {
    this.store.dispatch(AddTopping(choice))
  }
}
