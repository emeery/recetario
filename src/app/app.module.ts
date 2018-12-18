
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ComprasListaService } from './components/compras/compras-lista/compras.service';
import { AppRoutingModule } from './routes/app.routing.module';
import { RecetaService } from './components/recetas/recetas-lista/recetas.service';
import { DataRecetasService } from './components/compatido/service/data-recetas.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { RecetasModule } from './components/recetas/recetas.module';
import { CompartidoModule } from './components/compatido/compartido.module';
import { ComprasModule } from './components/compras/compras.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RecetasModule,
    AppRoutingModule,
    CompartidoModule,
    ComprasModule,
    AuthModule
  ],
  providers: [
    ComprasListaService,
    RecetaService,
    DataRecetasService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
