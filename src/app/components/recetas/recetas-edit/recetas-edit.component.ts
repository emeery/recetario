import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecetaService } from '../recetas-lista/recetas.service';
import { Receta } from '../model/receta.model';
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
   console.log(this.recetaForma.value);
  //  const newReceta = new Receta(
  //    this.recetaForma.value['nombre'],
  //    this.recetaForma.value['descripcion'],
  //    this.recetaForma.value['imagenRuta'],
  //    this.recetaForma.value['ingredientes']
  //  );
   if (this.modoEditar) {
     this.recetaServicio.updateReceta(this.id, this.recetaForma.value);
   } else { this.recetaServicio.addReceta(this.recetaForma.value); }
  }
  onAddIngrediente() {
    (<FormArray>this.recetaForma.get('ingredientes')).push(
      new FormGroup({
        'nombre': new FormControl(null, Validators.required),
        'monto': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
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
              'nombre': new FormControl(ing.nombre, Validators.required),
              'monto': new FormControl(ing.monto, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.recetaForma = new FormGroup({
      'nombre': new FormControl(recetaNombre, Validators.required),
      'imagenRuta': new FormControl(recetaImagenRuta, Validators.required),
      'descripcion': new FormControl(recetaDescripcion, Validators.required),
      'ingredientes': recetaIngredientes
    });
  }
  getControls() {
  return (<FormArray>this.recetaForma.get('ingredientes')).controls;
  }
}
