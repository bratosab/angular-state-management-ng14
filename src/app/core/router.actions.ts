import { createAction, props } from "@ngrx/store";

export enum RouterActionTypes {
    Navigate = '[router] navigate'
}

export const Navigate = createAction(RouterActionTypes.Navigate, props<{ path: string }>())
