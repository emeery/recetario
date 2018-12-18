import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { AuthService } from 'src/app/auth/auth.service';
import { DataRecetasService } from 'src/app/components/compatido/service/data-recetas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private drServicio: DataRecetasService,
    private autServicio: AuthService
    ) { }
  onSaveDatos() {
    this.drServicio.storeRecetas()
    .subscribe((res: Response) => {
      console.log(res);
    });
  }
  onFetchDatos() {
    this.drServicio.getRecetas();
  }
  onLogout() {
    this.autServicio.logout();
  }
}
