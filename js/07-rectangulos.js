/* Escribe una clase que permita crear distintos objetos “rectángulos”, con 
las propiedades de alto y ancho, mas los métodos necesarios para modificar 
y mostrar sus propiedades, calcular el perímetro y el área */

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificarAltura(nuevaAltura) {
    this.alto = nuevaAltura;
  }
  modificarAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }

  mostrar() {
    document.writeln(`-Alto: ${this.alto} <br> -Ancho: ${this.ancho} <br>`);
  }
  perimetro() {
    return 2 * (this.alto + this.ancho);
  }
  area() {
    return this.alto * this.ancho;
  }
}

const rectangulo1 = new Rectangulo(0, 0);

const nuevaAltura = parseInt(prompt("Ingrese la altura"));
const nuevoAncho = parseInt(prompt("Ingrese el ancho"));
rectangulo1.modificarAltura(nuevaAltura);
rectangulo1.modificarAncho(nuevoAncho);
rectangulo1.mostrar();
document.writeln(`<br>-Perímetro: ${rectangulo1.perimetro()}`);
document.writeln(`<br>-Área: ${rectangulo1.area()}`);
