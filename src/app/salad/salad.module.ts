import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaladPageComponent } from './salad-page/salad-page.component';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { StoreModule } from '@ngrx/store';
import { saladReducer } from './salad.reducers';

@NgModule({
  declarations: [SaladPageComponent, ToppingListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('salad', saladReducer),
  ],
})
export class SaladModule {}
