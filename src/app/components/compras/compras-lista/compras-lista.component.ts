import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingrediente } from '../../compatido/model/ingrediente.model';
import { ComprasListaService } from './compras.service';
import { Subscription} from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compras-lista',
  templateUrl: './compras-lista.component.html',
  styleUrls: ['./compras-lista.component.css']
})
export class ComprasListaComponent implements OnInit, OnDestroy {
  comprasState: Observable<{ingredientes: Ingrediente[]} >;
  private subscripcion: Subscription;
  constructor(
    private clServicio: ComprasListaService,
    private tienda: Store<{compras: {ingredientes: Ingrediente[]} }>) { }
  ngOnInit() {
    this.comprasState = this.tienda.select('compras');
    // this.subscripcion = this.clServicio.ingredientesChanged
    // .subscribe((ingre: Ingrediente[]) => {
    //   this.ingredientes = ingre;
    // });
  }
  onEditarItem(index: number) {
    this.clServicio.empezarEditing.next(index);
  }
  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }
}
