import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Receta } from '../model/receta.model';
@Component({
  selector: 'app-recetas-lista',
  templateUrl: './recetas-lista.component.html',
  styleUrls: ['./recetas-lista.component.css']
})
export class RecetasListaComponent implements OnInit {
  @Output() recetaQueSelecciono = new EventEmitter<Receta>();
  recetas: Receta[] = [
    new Receta(
      'pasta',
      'espagueti rojo',
      'https://image.flaticon.com/icons/png/512/168/168554.png' ),
      new Receta(
        'pasta',
        'espagueti rojo',
        'https://image.flaticon.com/icons/png/512/168/168554.png' )
  ];
  constructor() { }
  ngOnInit() {}
  onRecetaSelec(receta: Receta) {
    this.recetaQueSelecciono.emit(receta);
  }

}
