import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComprasListaComponent } from '../components/compras/compras-lista/compras-lista.component';
import { HomeComponent } from '../components/home/home.component';

const rutas: Routes = [
    {path: '', component: HomeComponent },
    {path: 'compras-lista', component: ComprasListaComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
