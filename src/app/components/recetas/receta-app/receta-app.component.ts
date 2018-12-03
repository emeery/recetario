import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta.model';

@Component({
  selector: 'app-receta-app',
  templateUrl: './receta-app.component.html',
  styleUrls: ['./receta-app.component.css']
})
export class RecetaAppComponent implements OnInit {
  recetaSelected: Receta;
  constructor() { }

  ngOnInit() {
  }

}
