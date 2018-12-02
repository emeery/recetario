import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta.model';

@Component({
  selector: 'app-recetas-lista',
  templateUrl: './recetas-lista.component.html',
  styleUrls: ['./recetas-lista.component.css']
})
export class RecetasListaComponent implements OnInit {
  recetas: Receta[] = [
    new Receta(
      'pasta',
      'espagueti rojo',
      'https://image.flaticon.com/icons/png/512/168/168554.png' )
  ];
  constructor() { }

  ngOnInit() {
  }

}
