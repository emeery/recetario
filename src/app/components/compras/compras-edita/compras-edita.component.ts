import {
  Component,
  OnInit,
  ViewChild,
  ElementRef, } from '@angular/core';
import { Ingrediente } from '../../compatido/model/ingrediente.model';
import { ComprasListaService } from '../compras-lista/compras.service';

@Component({
  selector: 'app-compras-edita',
  templateUrl: './compras-edita.component.html',
  styleUrls: ['./compras-edita.component.css']
})
export class ComprasEditaComponent implements OnInit {
  @ViewChild('nombreInput') nombreInputRef: ElementRef;
  @ViewChild('montoInput') montoInputRef: ElementRef;
  constructor(private clServicio: ComprasListaService) { }
  ngOnInit() {}
  onAddItem() {
    const ingNombre = this.nombreInputRef.nativeElement.value;
    const ingMonto = this.montoInputRef.nativeElement.value;
    const nuevoIngrediente = new Ingrediente(ingNombre, ingMonto);
    this.clServicio.addIngrediente(nuevoIngrediente);
  }
}
