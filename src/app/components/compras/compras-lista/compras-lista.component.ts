import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../../compatido/model/ingrediente.model';

@Component({
  selector: 'app-compras-lista',
  templateUrl: './compras-lista.component.html',
  styleUrls: ['./compras-lista.component.css']
})
export class ComprasListaComponent implements OnInit {
  ingredientes: Ingrediente[] = [
    new Ingrediente('apio', 5),
    new Ingrediente('tomates', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

}
