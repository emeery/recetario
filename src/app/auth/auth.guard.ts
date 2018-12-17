import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import {AuthService} from './auth.service';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private autServicio: AuthService) {}
  // devuelve un boleano
  canActivate(
    route: ActivatedRouteSnapshot,
    estado: RouterStateSnapshot) {
      return this.autServicio.estaAutenticado();
    }
}
