import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap } from "rxjs";
import { Navigate } from "./router.actions";

@Injectable()
export class RouterEffects {
    constructor(private actions$: Actions, private router: Router) {}

    doNavigation$ = createEffect(() => this.actions$.pipe(
        ofType(Navigate),
        map(payload => payload.path),
        tap(path => {
            this.router.navigate([ path ])
        })
    ), { dispatch: false })
}