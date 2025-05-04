/* Escribe una clase Producto para crear objetos. Estos objetos, deben presentar 
las propiedades código, nombre y precio, además del método imprime datos, el cual 
escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de 
los tres objetos instanciados */

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimirDatos() {
    document.writeln(
      `Código: ${this.codigo} <br> Nombre: ${this.nombre} <br> Precio: $${this.precio} (c/u)`
    );
  }
}

const productos = [];

const yerbaMate = new Producto("AD42AP4F", "YERBA MATE", 1500);
const cabralesCafé = new Producto("RTAS43GA", "CABRALES CAFÉ", 2400);
const fernetBranca = new Producto("0532KFAA", "FERNET BRANCA", 12900);

productos.push(yerbaMate);
productos.push(cabralesCafé);
productos.push(fernetBranca);

productos.forEach((producto) => {
  producto.imprimirDatos();
  document.writeln("<hr>");
});
