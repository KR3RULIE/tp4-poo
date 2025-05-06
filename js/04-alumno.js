/* Crea un objeto alumno con propiedades nombre, curso y calificaciones 
(un array de números). Escribe una función que reciba un objeto alumno 
y un número, y que añada la calificación al array de calificaciones del 
alumno. Usa un bucle para calcular la calificación más alta del alumno y 
un switch para clasificar al alumno según su calificación más alta 
(A para 9-10, B para 7-8, C para 5-6, D para 0-4). */

let notaMasAlta = 0;
const nombre = prompt("Ingrese el nombre");
const curso = prompt("Ingrese el curso");

const alumno = {
  nombre: nombre,
  curso: curso,
  calificaciones: [],
};
// ===AQUI SE AGREGA LAS NOTAS AL ARRAY===
function agregarNota(alumno, calificacion) {
  alumno.calificaciones.push(calificacion);
}

do {
  const nuevaNota = parseFloat(prompt("Ingrese la calificacion del alumno"));
  agregarNota(alumno, nuevaNota);
} while (confirm("¿Desea agregar otra calificacion?"));
// =======================================

// ==AQUI SE MUESTAN LAS NOTAS DEL ALUMNO=
document.writeln(
  `El alumno ${alumno.nombre} esta en el curso ${alumno.curso} y sus notas son:`
);

for (let i = 0; i < alumno.calificaciones.length; i++) {
  document.writeln(`<p>- ${alumno.calificaciones[i]}</p>`);
}
// =======================================

// ===AQUI SE CALCULA LA NOMA MAS ALTA====
for (let i = 0; i < alumno.calificaciones.length; i++) {
  if (alumno.calificaciones[i] > notaMasAlta) {
    notaMasAlta = alumno.calificaciones[i];
  }
}
// =======================================

switch (notaMasAlta) {
  case 1:
  case 2:
  case 3:
  case 4:
    document.writeln(`Su calicicacion final es: D`);
    break;
  case 5:
  case 6:
    document.writeln(`Su calicicacion final es: C`);
    break;
  case 7:
  case 8:
    document.writeln(`Su calicicacion final es: B`);
    break;
  case 9:
  case 10:
    document.writeln(`Su calicicacion final es: A`);
    break;
  default:
    document.writeln("NO SE ENCONTRO NINGUN CASO");
    break;
}
