/* Crea un array de objetos, donde cada objeto represente a un estudiante con 
propiedades nombre y nota. Luego, escribe una función que reciba este array y 
calcule la nota media de los estudiantes. Usa un bucle para recorrer el array. 
Usa prompt para ingresar los datos de los estudiantes. */

const estudiantes = [];

do {
  const nombre = prompt("Ingresa el nombre del estudiante");
  const nota = parseFloat(prompt("Ingresa la nota del estudiante"));

  estudiantes.push({
    nombre: nombre,
    nota: nota,
  });
} while (confirm("¿Deseas ingresar otro estudiante?"));

function calcularNota(estudiantes) {
  let suma = 0;
  for (let i = 0; i < estudiantes.length; i++) {
    suma += estudiantes[i].nota;
  }
  return suma / estudiantes.length;
}

document.writeln(`La nota media de los estudiantes es: ${calcularNota(estudiantes)}`)