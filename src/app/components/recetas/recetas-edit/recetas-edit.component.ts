import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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
    private recetaServicio: RecetaService,
    private router: Router) {}
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
  //  const newReceta = new Receta(this.recetaForma.value['nombre'], ...
   if (this.modoEditar) {
     this.recetaServicio.updateReceta(this.id, this.recetaForma.value);
   } else { this.recetaServicio.addReceta(this.recetaForma.value); }
   this.onCancelar();
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
  onDeleteIngrediente(i: number) {
    // recupera un control anidado
    (<FormArray>this.recetaForma.get('ingredientes')).removeAt(i);
  }
  onCancelar() {
    // redirige a la ruta anterior
    this.router.navigate(['../'], {relativeTo: this.route});
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
  getControles() {
  return (<FormArray>this.recetaForma.get('ingredientes')).controls;
  }
}
