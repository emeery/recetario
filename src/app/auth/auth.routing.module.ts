import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

const rutasAuth: Routes = [
  {path: 'signup', component: RegistroComponent },
  {path: 'login', component: LoginComponent}
];
@NgModule({
imports: [RouterModule.forChild(rutasAuth)],
exports: [RouterModule],
})
export class AuthRoutingModule {}
