import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecetaAppComponent } from '../components/recetas/receta-app/receta-app.component';
import { RecetasStartComponent } from '../components/recetas/recetas-start/recetas-start.component';
import { RecetasEditComponent } from '../components/recetas/recetas-edit/recetas-edit.component';
import { RecetasDetalleComponent } from '../components/recetas/recetas-detalle/recetas-detalle.component';
import { ComprasListaComponent } from '../components/compras/compras-lista/compras-lista.component';
import { RegistroComponent } from '../auth/registro/registro.component';


const rutas: Routes = [
    { path: '', redirectTo: '/recetas', pathMatch: 'full' },
    { path: 'recetas', component: RecetaAppComponent, children: [
      {path: '', component: RecetasStartComponent},
      {path: 'new', component: RecetasEditComponent},
      {path: ':id', component: RecetasDetalleComponent},
      {path: ':id/edita', component: RecetasEditComponent}
    ]},
    {path: 'compras-lista', component: ComprasListaComponent },
    {path: 'signup', component: RegistroComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
