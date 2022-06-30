import { createAction, props } from "@ngrx/store";
import { NamePrice } from "./salad.reducers";

export enum SaladActionTypes {
    AddTopping = '[salad] add topping',
    Reset = '[salad] reset',
    AddChoices = '[salad] add choices',
    LoadChoices = '[salad] load choices',
  }

export const AddTopping = createAction(SaladActionTypes.AddTopping, props<NamePrice>())
export const Reset = createAction(SaladActionTypes.Reset)
export const AddChoices = createAction(SaladActionTypes.AddChoices, props<{ list: NamePrice[]}>())
export const LoadChoices = createAction(SaladActionTypes.LoadChoices)
