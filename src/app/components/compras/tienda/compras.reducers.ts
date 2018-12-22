
import { Ingrediente } from '../../compatido/model/ingrediente.model';
import * as ComprasActions from './compras.actions';
const estadoInicial = {
  ingredientes: [
    new Ingrediente('Apio', 5),
    new Ingrediente('Brocoli', 10)
  ]
};
export const ADD_INGREDIENTE = 'ADD_INGREDIENTE';
export function comprasReducer(
  state = estadoInicial, action: ComprasActions.ComprasAcciones) {
    console.log(action.type);
    switch (action.type) {
      case ComprasActions.ADD_INGREDIENTE:
      return {
        ...state,
        ingredientes: [...state.ingredientes, action.payload]
      };
      default: return state;
  }
}
