import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RecetaAppComponent } from './receta-app/receta-app.component';
import { RecetasStartComponent } from './recetas-start/recetas-start.component';
import { RecetasListaComponent } from './recetas-lista/recetas-lista.component';
import { RecetasEditComponent } from './recetas-edit/recetas-edit.component';
import { RecetasDetalleComponent } from './recetas-detalle/recetas-detalle.component';
import { RecetaItemComponent } from './receta-item/receta-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecetasRoutingModule } from './recetas.routing.module';
import { CompartidoModule } from '../compatido/compartido.module';

@NgModule({
  declarations: [
    RecetaAppComponent,
    RecetasStartComponent,
    RecetasListaComponent,
    RecetasEditComponent,
    RecetasDetalleComponent,
    RecetaItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecetasRoutingModule,
    CompartidoModule
  ]
})
export class RecetasModule { }
