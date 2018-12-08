import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Receta } from '../model/receta.model';
import { RecetaService } from './recetas.service';
import { Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-recetas-lista',
  templateUrl: './recetas-lista.component.html',
  styleUrls: ['./recetas-lista.component.css']
})
export class RecetasListaComponent implements OnInit, OnDestroy {
  recetas: Receta[];
  subscripcion: Subscription;
  constructor(
    private recetaServicio: RecetaService,
    private router: Router,
    private route: ActivatedRoute) {}
  ngOnInit() {
    this.subscripcion = this.recetaServicio.recetaChanged.subscribe(
      (rec: Receta[]) => {
      this.recetas = rec;
    });
    this.recetas = this.recetaServicio.getRecetas();
  }
  onNuevaReceta() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    // memory leaks
    this.subscripcion.unsubscribe();
  }
}
