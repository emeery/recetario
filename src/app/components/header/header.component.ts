import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataRecetasService } from '../compatido/service/data-recetas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private drServicio: DataRecetasService) { }
  onSaveDatos() {
    this.drServicio.storeRecetas()
    .subscribe((res: Response) => {
      console.log(res);
    });
  }
  onFetchDatos() {
    this.drServicio.getRecetas();
  }
}
