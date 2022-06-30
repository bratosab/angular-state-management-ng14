import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { OrderService } from '../order.service';
import { AddChoices, LoadChoices } from './salad.actions';

@Injectable()
export class SaladEffects {
  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {}

  loadChoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadChoices),
      mergeMap(() =>
        this.orderService
          .get()
          .pipe(
            map((choices) => AddChoices({ list: choices }))
          )
      )
    )
  );
}
