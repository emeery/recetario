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
  // private logo = require('../../../assets/images/chef.png');
  // private imagenRuta = 'https://image.flaticon.com/icons/svg/526/5261e90.svg';
  constructor(
    private drServicio: DataRecetasService,
    private autServicio: AuthService
    ) { }
  onSaveDatos() {
    this.drServicio.storeRecetas()
    .subscribe((res) => {
      console.log(res);
    });
  }
  onFetchDatos() {
    this.drServicio.getRecetas();
  }
  estaAutenticado() {
    return this.autServicio.estaAutenticado();
  }
  onLogout() {
    this.autServicio.logout();
  }
}
