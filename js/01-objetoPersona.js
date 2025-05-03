/* Crea un objeto persona que contenga las propiedades nombre, edad y hobbies 
(un array de strings). Luego, escribe una función que reciba un objeto persona 
y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. 
Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt 
para ingresar los datos de la persona y el nuevo hobby. */

const nombre = prompt("Ingrese el nombre");
const edad = parseInt(prompt("Ingrese la edad"));

function agregarHobby(persona, nuevoHobby) {
  persona.hobbie.push(nuevoHobby);
}

const persona = {
  nombre: nombre,
  edad: edad,
  hobbie: [],
};

do {
  const nuevoHobby = prompt("Ingresa un nuevo hobby");
  agregarHobby(persona, nuevoHobby);
} while (confirm("¿Desea agregar otro hobbie?"));

document.writeln(
  `${persona.nombre} tiene ${persona.edad} años y sus hobbies son:`
);
for (let i = 0; i < persona.hobbie.length; i++) {
  document.writeln(`<p>- ${persona.hobbie[i]}</p>`);
}
