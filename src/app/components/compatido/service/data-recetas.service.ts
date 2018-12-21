import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest } from '@angular/common/http';

import { RecetaService } from '../../recetas/recetas-lista/recetas.service';
import { Receta } from '../../recetas/model/receta.model';
import { AuthService } from 'src/app/auth/auth.service';
import {map} from 'rxjs/operators';

@Injectable()
export class DataRecetasService {
  constructor(
    private http: HttpClient,
    private recetasServicio: RecetaService,
    private authServicio: AuthService
  ) {}
  storeRecetas() {
    // const token = this.authServicio.getToken();
    // const cabeceras = new HttpHeaders().set('autoriza', 'token123');
    // return this.http.put(
    //   'https://recetario-2777f.firebaseio.com/recetas.json',
    // this.recetasServicio.getRecetas(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token),
    //   // headers
    // });
    const req = new HttpRequest('PUT',
    'https://recetario-2777f.firebaseio.com/recetas.json',
    this.recetasServicio.getRecetas(),
    { reportProgress: true });
      return this.http.request(req);
  }
  getRecetas() {
    // const token = this.authServicio.getToken();
    this.http.get<Receta[]>(
      'https://recetario-2777f.firebaseio.com/recetas.json', {
        observe: 'body',
        responseType: 'json'
      })
      .pipe(map(
        (recetas) => {
          for (const rec of recetas) {
            if (!rec['ingredientes']) {
              rec['ingredientes'] = [];
            }
          }
          return recetas;
        }
      ))
      .subscribe((receta) => {
        console.log(receta);
        this.recetasServicio.setRecetas(receta);
      });
  }
}
