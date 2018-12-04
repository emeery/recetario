import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecetasDetalleComponent } from './components/recetas/recetas-detalle/recetas-detalle.component';
import { RecetasListaComponent } from './components/recetas/recetas-lista/recetas-lista.component';
import { RecetaAppComponent } from './components/recetas/receta-app/receta-app.component';
import { RecetaItemComponent } from './components/recetas/receta-item/receta-item.component';
import { ComprasEditaComponent } from './components/compras/compras-edita/compras-edita.component';
import { ComprasListaComponent } from './components/compras/compras-lista/compras-lista.component';
import { DropdownDirective } from './components/compatido/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetasDetalleComponent,
    RecetasListaComponent,
    RecetaAppComponent,
    RecetaItemComponent,
    ComprasEditaComponent,
    ComprasListaComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
