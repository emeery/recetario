import {
  Component,
  OnInit,
  Input } from '@angular/core';
import { Receta } from '../model/receta.model';

@Component({
  selector: 'app-receta-item',
  templateUrl: './receta-item.component.html',
  styleUrls: ['./receta-item.component.css']
})
export class RecetaItemComponent implements OnInit {
  @Input() receta: Receta; // entrada de otro componente
  @Input() index: number;
  constructor() {}
  ngOnInit() {}
}
