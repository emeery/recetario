import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';
import { Receta } from '../model/receta.model';
import { RecetaService } from '../recetas-lista/recetas.service';

@Component({
  selector: 'app-receta-item',
  templateUrl: './receta-item.component.html',
  styleUrls: ['./receta-item.component.css']
})
export class RecetaItemComponent implements OnInit {
  @Input() receta: Receta; // entrada de otro componente
  constructor(private recetaServicio: RecetaService) {}
  ngOnInit() {}
  alSeleccionar() {
    this.recetaServicio.recetaSelected.emit(this.receta);
  }
}
