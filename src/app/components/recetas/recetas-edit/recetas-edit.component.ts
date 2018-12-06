import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecetaService } from '../recetas-lista/recetas.service';
@Component({
  selector: 'app-recetas-edit',
  templateUrl: './recetas-edit.component.html',
  styleUrls: ['./recetas-edit.component.css']
})
export class RecetasEditComponent implements OnInit {
  id: number;
  recetaForma: FormGroup;
  modoEditar = false;
  constructor(private route: ActivatedRoute,
    private recetaServicio: RecetaService) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.modoEditar = params['id'] !== null;
        this.initForm();
      });
  }
  private initForm() {
    let recetaNombre = '';
    let recetaImagenRuta = '';
    let recetaDescripcion = '';
    if (this.modoEditar) {
      const receta = this.recetaServicio.getReceta(this.id);
      console.log(receta);
      recetaNombre = receta.nombre;
      recetaImagenRuta = receta.imagenRuta;
      recetaDescripcion = receta.descripcion;
    }
    this.recetaForma = new FormGroup({
      'nombre' : new FormControl(recetaNombre),
      'imagenRuta' : new FormControl(recetaImagenRuta),
      'descripcion' : new FormControl(recetaDescripcion),
    });
  }
}
