import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComprasListaComponent } from '../components/compras/compras-lista/compras-lista.component';
import { HomeComponent } from '../core/home/home.component';


const rutas: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recetas', loadChildren: '../components/recetas/recetas.module#RecetasModule'  },
    {path: 'compras-lista', component: ComprasListaComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
