import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
// intercepta llamadas http
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private autServicio: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler)
  : Observable<HttpEvent<any>> {
      console.log('llamada interceptada', req);
      const unacopia = req.clone({params: req.params.set(
        'auth', this.autServicio.getToken())});
      return next.handle(unacopia);
  }
}
