/* Crear una clase Libro que contenga al menos las siguientes propiedades:

-ISBN
-Título
-Autor
-Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear 
el método mostrarLibro() para mostrar la información relativa al libro con el 
siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas. */

class Libros {
  #isbn;
  #titulo;
  #autor;
  #numeroDePaginas;
  constructor(isbn, titulo, autor, numeroDePaginas) {
    this.#isbn = isbn;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#numeroDePaginas = numeroDePaginas;
  }

  get getIsbn() {
    return this.#isbn;
  }
  get getTitulo() {
    return this.#titulo;
  }
  get getAutor() {
    return this.#autor;
  }
  get getNumeroDePaginas() {
    return this.#numeroDePaginas;
  }

  set setIsbn(nuevoIsbn) {
    this.#isbn = nuevoIsbn;
  }
  set setTitulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }
  set setAutor(nuevoAutor) {
    this.#autor = nuevoAutor;
  }
  set setNumeroDePaginas(nuevoNumeroDePaginas) {
    this.#numeroDePaginas = nuevoNumeroDePaginas;
  }

  mostrarLibro() {
    document.writeln(
      `El libro "${this.#titulo}" con ISBN ${this.#isbn} creado por el autor ${
        this.#autor
      } tiene ${this.#numeroDePaginas} páginas <hr>`
    );
  }
}

const libro1 = new Libros(
  9789580443919,
  "Los ojos del perro siberiano",
  "Antonio Santa Ana",
  136
);

const libro2 = new Libros(
  9788420727943,
  "Don Quijote de la Mancha",
  "Miguel de Cervantes",
  1056
);

libro1.mostrarLibro();
libro2.mostrarLibro();

const libros = [libro1, libro2 /*, libro3, libro4, ..., libro10 */];

let libroConMasPaginas = libros[0]; // suponemos que el primero es el mayor

for (let i = 1; i < libros.length; i++) {
  if (libros[i].getNumeroDePaginas > libroConMasPaginas.getNumeroDePaginas) {
    libroConMasPaginas = libros[i]; // actualizamos si encontramos uno con más páginas
  }
}

document.writeln(
  `El libro con más páginas es "${libroConMasPaginas.getTitulo}" con ${libroConMasPaginas.getNumeroDePaginas} páginas.`
);

/*
    Quiero aclarar como resolvi lo del el libro con mas paginas:
    Me base en la siguiente estructura y lo lleve a un grado de complegidad un poco mayor:

    for (recorremos un array, algo sencillo de hacer) {
        if(preguntamos si "a" es mayor a "b") {
            en caso de que lo sea se guarda en un variable el nombre,
            es como buscar el numero mas alto.
        }
    }
*/