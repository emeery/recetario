import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Receta } from '../model/receta.model';
import { Ingrediente
} from '../../compatido/model/ingrediente.model';
import { ComprasListaService
} from '../../compras/compras-lista/compras.service';
@Injectable()
export class RecetaService {
  recetaChanged = new Subject<Receta[]>();
  recetas: Receta[] = [
    new Receta(
      'Hamburguesa Guacamole',
      '225gr de ternera gallega - sorprendente',
      'https://image.flaticon.com/icons/png/512/168/168554.png',
      [
        new Ingrediente('Pan', 2),
        new Ingrediente('Lonchas de Queso Cheddar', 4)
      ] ),
      new Receta(
        'Ensalada César',
        '1/2 Kg de Vegetales con aderezo especial',
        'https://image.flaticon.com/icons/png/512/168/168522.png',
        [
          new Ingrediente('Pan Especial', 2),
          new Ingrediente('Lonchas de Queso Cheddar', 4)
        ] ),
  ];
  constructor(private clServicio: ComprasListaService) {}
  getRecetas() {
    return this.recetas.slice();
  }
  getReceta(i: number) {
    return this.recetas[i];
  }
  addReceta(rec: Receta) {
    this.recetas.push(rec);
    this.recetaChanged.next(this.recetas.slice());
  }
  updateReceta(i: number, newReceta: Receta ) {
    this.recetas[i] = newReceta;
  }
  addIngredientesAlCarrito(ingrediente: Ingrediente[]) {
    this.clServicio.addIngredientes(ingrediente);
  }
}
