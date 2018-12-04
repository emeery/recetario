import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta.model';
import { RecetaService } from './recetas.service';
@Component({
  selector: 'app-recetas-lista',
  templateUrl: './recetas-lista.component.html',
  styleUrls: ['./recetas-lista.component.css']
})
export class RecetasListaComponent implements OnInit {
  recetas: Receta[];
  constructor(private recetaServicio: RecetaService) {}
  ngOnInit() {
    this.recetas = this.recetaServicio.getRecetas();
  }
}
