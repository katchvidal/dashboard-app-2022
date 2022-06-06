import * as IngresoEgresoActions from '../actions/ingreso-egreso.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { IngresoEgreso } from 'src/app/interfaces/ingreso-egreso.interfaces';


export interface IngresoEgresoState {
    items: IngresoEgreso[];
}

export const initialState: IngresoEgresoState = {
    items : []
};


export const ingresoEgresoReducer = createReducer(
    initialState,
    on(IngresoEgresoActions.SET_ITEMS, (state, { items }) => ({ ...state,  ...items })),
    on(IngresoEgresoActions.UNSET_ITEMS, (state, ) => ({ ...state, items: [] })),
    // on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
    // on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
    // on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
  );