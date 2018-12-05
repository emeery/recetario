import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Receta } from '../model/receta.model';
import { RecetaService } from './recetas.service';
@Component({
  selector: 'app-recetas-lista',
  templateUrl: './recetas-lista.component.html',
  styleUrls: ['./recetas-lista.component.css']
})
export class RecetasListaComponent implements OnInit {
  recetas: Receta[];
  constructor(
    private recetaServicio: RecetaService,
    private router: Router,
    private route: ActivatedRoute) {}
  ngOnInit() {
    this.recetas = this.recetaServicio.getRecetas();
  }
  onNuevaReceta() {
    this.router.navigate(['new'], {relativeTo: this.route});    
  }
}
