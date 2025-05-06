/* Crea una clase llamada "Animal" que tenga las propiedades 
"nombre" y "edad", y el método "emitirSonido". Luego, crea dos 
clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" 
y tengan su propio método "emitirSonido". Finalmente, crea dos 
objetos, uno de la clase "Perro" y otro de la clase "Gato", y 
llama a sus métodos "emitirSonido" para verificar que cada animal 
emite el sonido adecuado.  */

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  emitirSonido() {
    document.writeln("Este animal emite un sonido.");
  }
}

class Perro extends Animal {
  emitirSonido() {
    document.writeln("¡Guau! ¡Guau!<br>");
  }
}
class Gato extends Animal {
  emitirSonido() {
    document.writeln("¡Miiauuuu!<br>");
  }
}

const miPerro = new Perro("Firulais", 3);
const miGato = new Gato("Michi", 2);

miPerro.emitirSonido();
miGato.emitirSonido();
