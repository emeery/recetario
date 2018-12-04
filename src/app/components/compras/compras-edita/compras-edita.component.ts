import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingrediente } from '../../compatido/model/ingrediente.model';

@Component({
  selector: 'app-compras-edita',
  templateUrl: './compras-edita.component.html',
  styleUrls: ['./compras-edita.component.css']
})
export class ComprasEditaComponent implements OnInit {
  @ViewChild('nombreInput') nombreInputRef: ElementRef;
  @ViewChild('montoInput') montoInputRef: ElementRef;
  @Output() ingredienteAgregado = new EventEmitter<Ingrediente>();
  constructor() { }
  ngOnInit() {
  }
  onAddItem() {
    const ingNombre = this.nombreInputRef.nativeElement.value;
    const ingMonto = this.montoInputRef.nativeElement.value;
    const nuevoIngrediente = new Ingrediente(ingNombre, ingMonto);
    this.ingredienteAgregado.emit(nuevoIngrediente);
  }
}
