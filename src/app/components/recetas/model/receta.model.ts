export class Receta {
  public nombre: string;
  public descripcion: string;
  public imagenRuta: string;
  constructor(
    nombre: string,
    descripcion: string,
    imagenRuta: string) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.imagenRuta = imagenRuta;
    }
}
