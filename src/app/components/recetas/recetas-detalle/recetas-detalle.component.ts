import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../model/receta.model';

@Component({
  selector: 'app-recetas-detalle',
  templateUrl: './recetas-detalle.component.html',
  styleUrls: ['./recetas-detalle.component.css']
})
export class RecetasDetalleComponent implements OnInit {
  @Input() receta: Receta;
  constructor() {}
  ngOnInit() {}
}
