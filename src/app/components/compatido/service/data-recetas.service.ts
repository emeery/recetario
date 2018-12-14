import { Http, Response } from '@angular/http';
import { RecetaService } from '../../recetas/recetas-lista/recetas.service';
import { Injectable } from '@angular/core';
import { Receta } from '../../recetas/model/receta.model';
import {map} from 'rxjs/operators';

@Injectable()
export class DataRecetasService {
  constructor(
    private http: Http,
    private recetasServicio: RecetaService
  ) {}
  storeRecetas() {
    return this.http.put('https://recetario-2777f.firebaseio.com/recetas.json',
    this.recetasServicio.getRecetas());
  }
  getRecetas() {
    this.http.get('https://recetario-2777f.firebaseio.com/recetas.json')
    .pipe(map(
      (res: Response) => {
        const recetas: Receta[] = res.json();
        for (let rec of recetas) {
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
