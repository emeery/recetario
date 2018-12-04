
import {Ingrediente} from '../../compatido/model/ingrediente.model';
import { EventEmitter } from '@angular/core';
export class ComprasListaService {
  ingredientesChanged = new EventEmitter<Ingrediente[]>();
  ingredientes: Ingrediente[] = [
    new Ingrediente('Apio', 5),
    new Ingrediente('Brócoli', 10)
  ];
  getIngredientes() {
    return this.ingredientes.slice();
  }
  addIngrediente(ing: Ingrediente) {
    this.ingredientes.push(ing);
    this.ingredientesChanged.emit(this.ingredientes.slice());
  }
  addIngredientes(ing: Ingrediente[]) {
    // for (const ingrediente of ing) {
    //   this.addIngrediente(ingrediente);
    // }
    this.ingredientes.push(...ing);
    this.ingredientesChanged.emit(this.ingredientes.slice());
  }
}
