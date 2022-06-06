import { createAction, props } from '@ngrx/store';
import { IngresoEgreso } from 'src/app/interfaces/ingreso-egreso.interfaces';

export const SET_ITEMS = createAction(
  '[INGRESO EGRESO] SET_ITEMS',
  props<{ items: IngresoEgreso }>()
);
export const UNSET_ITEMS = createAction(
  '[INGRESO EGRESO] UNSET_ITEMS',
//   props<{ username: string; password: string }>()
);