import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../routes/app.routing.module';
import { CompartidoModule } from '../components/compatido/compartido.module';
import { ComprasListaService } from '../components/compras/compras-lista/compras.service';
import { RecetaService } from '../components/recetas/recetas-lista/recetas.service';
import { DataRecetasService } from '../components/compatido/service/data-recetas.service';
import { AuthService } from '../auth/auth.service';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    CompartidoModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ComprasListaService,
    RecetaService,
    DataRecetasService,
    AuthService
  ]
})
export class CoreModule { }
