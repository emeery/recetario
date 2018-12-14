import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecetasDetalleComponent } from './components/recetas/recetas-detalle/recetas-detalle.component';
import { RecetasListaComponent } from './components/recetas/recetas-lista/recetas-lista.component';
import { RecetaAppComponent } from './components/recetas/receta-app/receta-app.component';
import { RecetaItemComponent } from './components/recetas/receta-item/receta-item.component';
import { RecetasStartComponent } from './components/recetas/recetas-start/recetas-start.component';
import { RecetasEditComponent } from './components/recetas/recetas-edit/recetas-edit.component';
import { ComprasEditaComponent } from './components/compras/compras-edita/compras-edita.component';
import { ComprasListaComponent } from './components/compras/compras-lista/compras-lista.component';
import { ComprasListaService } from './components/compras/compras-lista/compras.service';
import { AppRoutingModule } from './routes/app.routing.module';

import { DropdownDirective } from './components/compatido/dropdown.directive';
import { RecetaService } from './components/recetas/recetas-lista/recetas.service';
import { DataRecetasService } from './components/compatido/service/data-recetas.service';


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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ComprasListaService, RecetaService, DataRecetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
