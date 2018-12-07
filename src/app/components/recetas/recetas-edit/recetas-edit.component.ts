import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
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
  constructor(
    private route: ActivatedRoute,
    private recetaServicio: RecetaService) {}
  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.modoEditar = params['id'] != null;
        this.initForm();
      });
  }
  onSubmit() {
   console.log(this.recetaForma);
  }
  onAddIngrediente() {
    (<FormArray>this.recetaForma.get('ingredientes')).push(
      new FormGroup({
        'nombre': new FormControl(),
        'monto': new FormControl()
      })
    );
  }
  private initForm() {
    let recetaNombre = '';
    let recetaImagenRuta = '';
    let recetaDescripcion = '';
    const recetaIngredientes = new FormArray([]);
    if (this.modoEditar) {
      const receta = this.recetaServicio.getReceta(this.id);
      // console.log(receta);
      recetaNombre = receta.nombre;
      recetaImagenRuta = receta.imagenRuta;
      recetaDescripcion = receta.descripcion;
      if (receta['ingredientes']) {
        for (const ing of receta.ingredientes) {
          recetaIngredientes.push(
            new FormGroup({
              'nombre': new FormControl(ing.nombre),
              'monto': new FormControl(ing.monto)
            })
          );
        }
      }
    }
    this.recetaForma = new FormGroup({
      'nombre': new FormControl(recetaNombre),
      'imagenRuta': new FormControl(recetaImagenRuta),
      'descripcion': new FormControl(recetaDescripcion),
      'ingredientes': recetaIngredientes
    });
  }
  getControls() {
  return (<FormArray>this.recetaForma.get('ingredientes')).controls;
  }
}
