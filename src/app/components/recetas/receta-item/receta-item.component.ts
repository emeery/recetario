import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';
import { Receta } from '../model/receta.model';

@Component({
  selector: 'app-receta-item',
  templateUrl: './receta-item.component.html',
  styleUrls: ['./receta-item.component.css']
})
export class RecetaItemComponent implements OnInit {
  @Input() receta: Receta; // dentro hacia afuera
  @Output() recetaSeleccionada = new EventEmitter<void>();
  constructor() {}
  ngOnInit() {}
  alSeleccionar() {
    this.recetaSeleccionada.emit();
  }
}
