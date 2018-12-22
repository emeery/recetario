
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app.routing.module';
import { CompartidoModule } from './components/compatido/compartido.module';
import { ComprasModule } from './components/compras/compras.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { comprasReducer } from './components/compras/tienda/compras.reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CompartidoModule,
    ComprasModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot({compras: comprasReducer}),
    StoreDevtoolsModule.instrument({maxAge: 10})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
