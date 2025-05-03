/* Crea un objeto libro que tenga propiedades título, autor, año y género. 
Luego, escribe una función que reciba un array de libros y un género y 
devuelva un array con los libros de ese género usando filter. Usa prompt 
para ingresar los datos de los libros y el género. */

const libros = [];

do {
  const titulo = prompt("Ingrese el titulo del libro");
  const autor = prompt("Ingrese el autor del libro");
  const año = parseInt(prompt("Ingrese el año del libro"));
  const genero = prompt("Ingrese el genero del libro");
  libros.push({
    titulo: titulo,
    autor: autor,
    año: año,
    genero: genero,
  });
} while (confirm("¿Deseas ingresar otro libro?"));

function libreria(libros, generoBuscado) {
  const librosFiltrados = libros.filter(
    (libro) => libro.genero.toLowerCase() === generoBuscado.toLowerCase()
  );
  return librosFiltrados;
}

const generoBuscado = prompt("¿Qué género deseas buscar?");
const resultado = libreria(libros, generoBuscado);

if (resultado.length > 0) {
  document.writeln(`<h3>Libros del género "${generoBuscado}":</h3>`);
  resultado.forEach((libro) => {
    document.writeln(
      `<p>Titulo: ${libro.titulo} - Autor: ${libro.autor} - Año: ${libro.año}</p>`
    );
  });
} else {
  document.writeln(
    `<p>No se encontraron libros del género "${generoBuscado}".</p>`
  );
}
