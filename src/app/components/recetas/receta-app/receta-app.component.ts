import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta.model';
import { RecetaService } from '../recetas-lista/recetas.service';

@Component({
  selector: 'app-receta-app',
  templateUrl: './receta-app.component.html',
  styleUrls: ['./receta-app.component.css'],
  providers: [RecetaService]
})
export class RecetaAppComponent implements OnInit {
  recetaSelected: Receta;
  constructor(private recetaServicio: RecetaService) { }
  ngOnInit() {
    this.recetaServicio.recetaSelected
    .subscribe((recipe: Receta) => {
      this.recetaSelected = recipe;
    });
  }

}
