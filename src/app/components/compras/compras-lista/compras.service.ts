
import {Ingrediente} from '../../compatido/model/ingrediente.model';
import { Subject } from 'rxjs/Subject';
export class ComprasListaService {
  ingredientesChanged = new Subject<Ingrediente[]>();
  ingredientes: Ingrediente[] = [
    new Ingrediente('Apio', 5),
    new Ingrediente('Brócoli', 10)
  ];
  getIngredientes() {
    return this.ingredientes.slice();
  }
  addIngrediente(ing: Ingrediente) {
    this.ingredientes.push(ing);
    this.ingredientesChanged.next(this.ingredientes.slice());
  }
  addIngredientes(ing: Ingrediente[]) {
    // for (const ingrediente of ing) {
    //   this.addIngrediente(ingrediente);
    // }
    this.ingredientes.push(...ing);
    this.ingredientesChanged.next(this.ingredientes.slice());
  }
}
