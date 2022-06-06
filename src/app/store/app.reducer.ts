import { ActionReducerMap } from "@ngrx/store";
import * as fromIngresoEgreso from './reducers/ingreso-egreso.reducer'


export interface AppState {
    ingresoEgreso: fromIngresoEgreso.IngresoEgresoState
}

export const appReducers : ActionReducerMap<AppState> = {
    ingresoEgreso: fromIngresoEgreso.ingresoEgresoReducer
}