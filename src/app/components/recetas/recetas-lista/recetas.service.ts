import { Receta } from '../model/receta.model';
import { EventEmitter } from '@angular/core';

export class RecetaService {
  recetaSelected = new EventEmitter<Receta>();
  recetas: Receta[] = [
    new Receta(
      'pasta',
      'espagueti rojo',
      'https://image.flaticon.com/icons/png/512/168/168554.png' ),
      new Receta(
        'ensalada',
        'aderezo',
        'https://image.flaticon.com/icons/png/512/168/168554.png' )
  ];
  getRecetas() {
    return this.recetas.slice();
  }
}
