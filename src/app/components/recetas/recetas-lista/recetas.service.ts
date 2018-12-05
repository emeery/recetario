import { Receta } from '../model/receta.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediente
} from '../../compatido/model/ingrediente.model';
import { ComprasListaService
} from '../../compras/compras-lista/compras.service';
@Injectable()
export class RecetaService {
  recetaSelected = new EventEmitter<Receta>();
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
        'Alitas BBQ',
        '1/2 Kg de Alitas con salsa especial BBQ',
        'https://image.flaticon.com/icons/png/512/168/168554.png',
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
