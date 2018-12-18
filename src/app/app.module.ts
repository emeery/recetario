
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComprasListaService } from './components/compras/compras-lista/compras.service';
import { AppRoutingModule } from './routes/app.routing.module';
import { RecetaService } from './components/recetas/recetas-lista/recetas.service';
import { DataRecetasService } from './components/compatido/service/data-recetas.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { CompartidoModule } from './components/compatido/compartido.module';
import { ComprasModule } from './components/compras/compras.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CompartidoModule,
    ComprasModule,
    AuthModule,
    CoreModule
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
