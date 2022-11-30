import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaladPageComponent } from './salad-page/salad-page.component';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { StoreModule } from '@ngrx/store';
import { saladReducer } from './salad.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SaladEffects } from './salad.effects';

@NgModule({
  declarations: [SaladPageComponent, ToppingListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('salad', saladReducer),
    EffectsModule.forFeature([SaladEffects]),
  ],
})
export class SaladModule {}
