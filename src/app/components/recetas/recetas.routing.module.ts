import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecetaAppComponent } from './receta-app/receta-app.component';
import { RecetasStartComponent } from './recetas-start/recetas-start.component';
import { RecetasEditComponent } from './recetas-edit/recetas-edit.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { RecetasDetalleComponent } from './recetas-detalle/recetas-detalle.component';

const recetasRutas: Routes = [
  { path: '', component: RecetaAppComponent, children: [
    {path: '', component: RecetasStartComponent},
    {path: 'new', component: RecetasEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: RecetasDetalleComponent},
    {path: ':id/edita', component: RecetasEditComponent, canActivate: [AuthGuard]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(recetasRutas)],
  exports: [RouterModule],
})
export class RecetasRoutingModule { }
