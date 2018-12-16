import { Http, Response } from '@angular/http';
import { RecetaService } from '../../recetas/recetas-lista/recetas.service';
import { Injectable } from '@angular/core';
import { Receta } from '../../recetas/model/receta.model';
import {map} from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class DataRecetasService {
  constructor(
    private http: Http,
    private recetasServicio: RecetaService,
    private authServicio: AuthService
  ) {}
  storeRecetas() {
    return this.http.put('https://recetario-2777f.firebaseio.com/recetas.json',
    this.recetasServicio.getRecetas());
  }
  getRecetas() {
    const token = this.authServicio.getToken();
    this.http.get('https://recetario-2777f.firebaseio.com/recetas.json?auth=' + token)
    .pipe(map(
      (res: Response) => {
        const recetas: Receta[] = res.json();
        for (const rec of recetas) {
          if (!rec['ingredientes']) {
            rec['ingredientes'] = [];
          }
        }
        return recetas;
      }
    ))
    .subscribe((recetas: Receta[]) => {
      console.log(recetas);
      this.recetasServicio.setRecetas(recetas);
    });
  }
}
