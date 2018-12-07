import { Receta } from '../model/receta.model';
import { Injectable } from '@angular/core';
import { Ingrediente
} from '../../compatido/model/ingrediente.model';
import { ComprasListaService
} from '../../compras/compras-lista/compras.service';
@Injectable()
export class RecetaService {
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
  getReceta(index: number) {
    return this.recetas[index];
  }
  addIngredientesAlCarrito(ingrediente: Ingrediente[]) {
    this.clServicio.addIngredientes(ingrediente);
  }
}
