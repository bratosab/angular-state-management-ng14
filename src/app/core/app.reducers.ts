import { createReducer, on } from "@ngrx/store";
import { ConfirmOrder, OrderFailed, OrderSuccess, SetUsername } from "./app.actions";

export interface AppState {
    username: string;
    orderId: number;
    orderStatus?: 'pending' | 'success' | 'failed';
    salad?: any;
}

export const initialState: AppState = { 
    username: '',
    orderId: Math.random() * 2400
}

export const appReducer = createReducer(
    initialState,
    on(SetUsername, (state, action) => ({ ...state, username: action.username })),
    on(ConfirmOrder, (state) => ({ ...state, orderStatus: 'pending' })),
    on(OrderSuccess, (state) => ({ ...state, orderStatus: 'success' })),
    on(OrderFailed, (state) => ({ ...state, orderStatus: 'failed' })),
)