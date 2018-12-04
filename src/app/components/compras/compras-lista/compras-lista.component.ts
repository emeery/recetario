import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../../compatido/model/ingrediente.model';
import { ComprasListaService } from './compras.service';

@Component({
  selector: 'app-compras-lista',
  templateUrl: './compras-lista.component.html',
  styleUrls: ['./compras-lista.component.css']
})
export class ComprasListaComponent implements OnInit {
  ingredientes: Ingrediente[];
  constructor(private clServicio: ComprasListaService) { }
  ngOnInit() {
    this.ingredientes = this.clServicio.getIngredientes();
    this.clServicio.ingredientesChanged
    .subscribe((ingre: Ingrediente[]) => {
      this.ingredientes = ingre;
    });
  }
}
