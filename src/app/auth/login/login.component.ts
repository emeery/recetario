  import { Component, OnInit } from '@angular/core';
  import { AuthService } from '../auth.service';
  import { NgForm } from '@angular/forms';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {

    constructor(private authServicio: AuthService) {}
    ngOnInit() {}
    onLogin(forma: NgForm) {
      const email = forma.value.correo;
      const contraseña = forma.value.contraseña;
      this.authServicio.loginUsuario(email, contraseña);
    }
  }
