import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComprasListaComponent } from './compras-lista/compras-lista.component';
import { ComprasEditaComponent } from './compras-edita/compras-edita.component';

@NgModule({
  declarations: [
    ComprasListaComponent,
    ComprasEditaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComprasModule {}
