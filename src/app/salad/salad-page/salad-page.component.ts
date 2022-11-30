import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/app.reducers';
import { LoadChoices, Reset } from '../salad.actions';
import { NamePrice, SaladState } from '../salad.reducers';

@Component({
  selector: 'app-salad-page',
  templateUrl: './salad-page.component.html',
  styleUrls: ['./salad-page.component.scss']
})
export class SaladPageComponent implements OnInit {
  salad$: Observable<SaladState>;
  dressing$: Observable<string>;
  price$: Observable<number>;
  toppings$: Observable<NamePrice[]>;

  constructor(private store: Store<{ salad: SaladState }>) { }

  ngOnInit(): void {
    this.salad$ = this.store.select((state) => state.salad);
    this.dressing$ = this.store.select((state) => state.salad.dressing);
    this.price$ = this.store.select((state) => state.salad.price);
    this.toppings$ = this.store.select((state) => state.salad.toppings);

    this.store.dispatch(LoadChoices())
  }

  resetOrder() {
    this.store.dispatch(Reset())
  }

}
