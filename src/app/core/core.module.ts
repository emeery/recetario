import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../routes/app.routing.module';
import { CompartidoModule } from '../components/compatido/compartido.module';
import { ComprasListaService } from '../components/compras/compras-lista/compras.service';
import { RecetaService } from '../components/recetas/recetas-lista/recetas.service';
import { DataRecetasService } from '../components/compatido/service/data-recetas.service';
import { AuthService } from '../auth/auth.service';
import { AuthInterceptor } from '../components/compatido/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class CoreModule { }
