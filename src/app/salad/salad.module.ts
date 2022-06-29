import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaladPageComponent } from './salad-page/salad-page.component';
import { ToppingListComponent } from './topping-list/topping-list.component';



@NgModule({
  declarations: [
    SaladPageComponent,
    ToppingListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SaladModule { }
