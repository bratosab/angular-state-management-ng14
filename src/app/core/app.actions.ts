import { createAction, Action, props } from "@ngrx/store";

export enum AppActionTypes {
    SetUsername = '[app] set username',
    ConfirmOrder = '[app] confirm order',
    OrderSuccess = '[app] order success',
    OrderFailed = '[app] order failed'
  }

export const SetUsername = createAction(AppActionTypes.SetUsername, props<{ username: string }>())
export const ConfirmOrder = createAction(AppActionTypes.ConfirmOrder)
export const OrderSuccess = createAction(AppActionTypes.OrderSuccess)
export const OrderFailed = createAction(AppActionTypes.OrderFailed)