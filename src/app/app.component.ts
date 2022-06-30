import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SetUsername } from './core/app.actions';
import { AppState } from './core/app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  state$: Observable<AppState>;
  username: string = '';

  constructor(private store: Store<{ app: AppState }>) {
    this.state$ = this.store.select((state) => state.app);
  }

  setUsername(username: string) {
    this.store.dispatch(SetUsername({ username }));
  }
}
