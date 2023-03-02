import { createReducer, on } from '@ngrx/store';
import { AddChoices, AddTopping, LoadChoices, Reset } from './salad.actions';

export interface SaladState {
  dressing: string;
  price: number;
  toppings: NamePrice[];
  choices: NamePrice[];
}

export interface NamePrice {
  name: string;
  price: number;
}

const initialState: SaladState = {
  dressing: 'Ranch',
  price: 5.99,
  toppings: [],
  choices: [],
};

export const saladReducer = createReducer(
  initialState,
  on(AddTopping, (state, action) => ({
    ...state,
    toppings: [...state.toppings, action],
    price: state.price + action.price,
  })),
  on(Reset, state => {
    return { ...initialState, choices: [...state.choices] }
  }),
  on(AddChoices, (state, action) => ({
    ...state,
    choices: [...state.choices, ...action.list],
  })),
);
