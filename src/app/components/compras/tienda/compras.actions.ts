import {Action} from '@ngrx/store';
import { Ingrediente } from '../../compatido/model/ingrediente.model';

export const ADD_INGREDIENTE = 'ADD_INGREDIENTE';
export class AddIngrediente implements Action {
  readonly type = ADD_INGREDIENTE;
  payload: Ingrediente;
}
export type ComprasAcciones = AddIngrediente;
