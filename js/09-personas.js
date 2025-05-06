/* Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, 
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación 
pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la 
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras. */

class Personas {
  constructor(nombre, edad, sexo, peso, altura, añoDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = this.genrarDNI();
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoDeNacimiento = añoDeNacimiento;
  }

  mostrarGenracion(añoDeNacimiento) {
    if (añoDeNacimiento >= 1994 && añoDeNacimiento <= 2010) {
      document.writeln("Perteneces a la generación Z <br>");
      document.writeln("Su rasgo caracteristico es: 😋 Irreverencia <br>");
    } else if (añoDeNacimiento >= 1983 && añoDeNacimiento <= 1993) {
      document.writeln("Perteneces a la generación Y (millenials) <br>");
      document.writeln("Su rasgo caracteristico es: 😖 Frustración <br>");
    } else if (añoDeNacimiento >= 1969 && añoDeNacimiento <= 1980) {
      document.writeln("Perteneces a la generación X <br>");
      document.writeln(
        "Su rasgo caracteristico es: 😎 Obsesión por el éxito <br>"
      );
    } else if (añoDeNacimiento >= 1949 && añoDeNacimiento <= 1968) {
      document.writeln("Perteneces a la generación Baby Boom <br>");
      document.writeln("Su rasgo caracteristico es: 🤑 Ambición <br>");
    } else if (añoDeNacimiento >= 1930 && añoDeNacimiento <= 1948) {
      document.writeln(
        "Perteneces a la Silent Generation (los niños de la posguerra) <br>"
      );
      document.writeln("Su rasgo caracteristico es: 😐 Austeridad <br>");
    } else {
      document.writeln("No se hayó ninguna generación");
    }
  }
  esMayorDeEdad(edad) {
    if (edad >= 18) {
      document.writeln(`La persona ${this.nombre} es mayor de edad <br>`);
    } else {
      document.writeln(`La persona ${this.nombre} no es mayor de edad <br>`);
    }
  }
  mostrarDatos() {
    document.writeln(`<ul>`);
    document.writeln(`<li>Nombre: ${this.nombre}</li>`);
    document.writeln(`<li>Edad: ${this.edad}</li>`);
    document.writeln(`<li>DNI: ${this.dni}</li>`);
    document.writeln(`<li>Sexo: ${this.sexo}</li>`);
    document.writeln(`<li>Peso: ${this.peso}</li>`);
    document.writeln(`<li>Altura: ${this.altura}</li>`);
    document.writeln(`<li>Año de nacimiento: ${this.añoDeNacimiento}</li>`);
    document.writeln(`</ul>`);
  }
  genrarDNI() {
    return Math.round(Math.random() * 100000000);
  }
}

const marcos = new Personas(
  "Marcos Joel Tebis",
  23,
  "Masculino",
  "200 Kg",
  "173 cm",
  2001
);

marcos.mostrarGenracion(marcos.añoDeNacimiento);
marcos.esMayorDeEdad(marcos.edad);
marcos.mostrarDatos();
