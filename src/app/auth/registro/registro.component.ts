import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  constructor(private authServicio: AuthService) { }
  ngOnInit() {}
  // onRegistro(forma: NgForm) {
  //   const email = forma.value.correo;
  //   const contraseña = forma.value.contraseña;
  //   this.authServicio.signupUsuario(email, contraseña);
  // }

}
