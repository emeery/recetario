import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComprasListaComponent } from '../components/compras/compras-lista/compras-lista.component';
import { HomeComponent } from '../core/home/home.component';
import { AuthGuard } from '../auth/auth.guard';


const rutas: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recetas', loadChildren: '../components/recetas/recetas.module#RecetasModule'  },
    {path: 'compras-lista', component: ComprasListaComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
