import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Receta } from '../model/receta.model';
import {RecetaService} from '../recetas-lista/recetas.service';

@Component({
  selector: 'app-recetas-detalle',
  templateUrl: './recetas-detalle.component.html',
  styleUrls: ['./recetas-detalle.component.css']
})
export class RecetasDetalleComponent implements OnInit {
  receta: Receta;
  id: number;
  constructor(
    private recetaServicio: RecetaService,
    private route: ActivatedRoute,
    private router: Router
    ) {}
  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.receta = this.recetaServicio.getReceta(this.id);
      });
    
  }
  onAlCarrito() {
    this.recetaServicio.addIngredientesAlCarrito(this.receta.ingredientes);
  }
  onEditarReceta() {
    this.router.navigate(['edita'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edita'], {relativeTo: this.route});
  }
}
