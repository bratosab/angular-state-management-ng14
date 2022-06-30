import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaladPageComponent } from './salad/salad-page/salad-page.component';

const routes: Routes = [
  { path: 'salad/order', component: SaladPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
