import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy, } from '@angular/core';
import { Ingrediente } from '../../compatido/model/ingrediente.model';
import { ComprasListaService } from '../compras-lista/compras.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ComprasAccion from '../tienda/compras.actions';
@Component({
  selector: 'app-compras-edita',
  templateUrl: './compras-edita.component.html',
  styleUrls: ['./compras-edita.component.css']
})
export class ComprasEditaComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForma: NgForm;
  subscripcion: Subscription;
  editarModo = false;
  editadoItemIndex: number;
  editadoItem: Ingrediente;
  constructor(
    private clServicio: ComprasListaService,
    private tienda: Store<{compras: {ingredientes: Ingrediente[]}}>) { }
  ngOnInit() {
    this.subscripcion = this.clServicio.empezarEditing
    .subscribe((i: number) => {
      this.editarModo = true;
      this.editadoItemIndex = i;
      this.editadoItem = this.clServicio.getIngrediente(i);
      this.slForma.setValue({
        nombre: this.editadoItem.nombre,
        monto: this.editadoItem.monto
      });
    });
  }
  onSubmit(forma: NgForm) {
    const valor = forma.value;
    const nuevoIngrediente = new Ingrediente(valor.nombre, valor.monto);
    if (this.editarModo) {
      this.clServicio.updateIngrediente(
        this.editadoItemIndex, nuevoIngrediente);
    } else {
      // this.clServicio.addIngrediente(nuevoIngrediente);
      this.tienda.dispatch(new ComprasAccion.AddIngrediente(nuevoIngrediente));
    }
    this.editarModo = false;
    forma.reset();
  }
  onDelete() {
    this.clServicio.deleteIngrediente(this.editadoItemIndex);
    this.onClear();
  }
  onClear() {
    this.slForma.reset();
    this.editarModo = false;
  }
  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }
}
