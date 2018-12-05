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
import { ComprasListaService } from './components/compras/compras-lista/compras.service';
import { AppRoutingModule } from './routes/app.routing.module';
import { RecetasStartComponent } from './components/recetas/recetas-start/recetas-start.component';
import { RecetasEditComponent } from './components/recetas/recetas-edit/recetas-edit.component';


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
    DropdownDirective,
    RecetasStartComponent,
    RecetasEditComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [ComprasListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
