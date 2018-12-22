
import {Ingrediente} from '../../compatido/model/ingrediente.model';
import { Subject } from 'rxjs/Subject';
export class ComprasListaService {
  ingredientesChanged = new Subject<Ingrediente[]>();
  empezarEditing = new Subject<number>();
  ingredientes: Ingrediente[] = [
    new Ingrediente('Apio', 5),
    new Ingrediente('Brócoli', 10)
  ];
  // getIngredientes() {
  //   return this.ingredientes.slice();
  // }
  getIngrediente(index: number) {
    return this.ingredientes[index];
  }
  // addIngrediente(ing: Ingrediente) {
  //   this.ingredientes.push(ing);
  //   this.ingredientesChanged.next(this.ingredientes.slice());
  // }
  addIngredientes(ing: Ingrediente[]) {
    // for (const ingrediente of ing) {
    //   this.addIngrediente(ingrediente);
    // }
    this.ingredientes.push(...ing);
    this.ingredientesChanged.next(this.ingredientes.slice());
  }
  updateIngrediente(i: number, newIngrediente: Ingrediente) {
    this.ingredientes[i] = newIngrediente;
    this.ingredientesChanged.next(this.ingredientes.slice());
  }
  deleteIngrediente(index: number) {
    this.ingredientes.splice(index, 1);
    this.ingredientesChanged.next(this.ingredientes.slice()); // copia
  }
}
