import { Ingrediente } from '../../compatido/model/ingrediente.model';

export class Receta {
  public nombre: string;
  public descripcion: string;
  public imagenRuta: string;
  public ingredientes: Ingrediente[];
  constructor(
    nombre: string,
    descripcion: string,
    imagenRuta: string,
    ingredientes: Ingrediente[]) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.imagenRuta = imagenRuta;
      this.ingredientes = ingredientes;
    }
}
