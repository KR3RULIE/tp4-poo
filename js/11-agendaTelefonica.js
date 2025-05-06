/* Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es 
igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de 
dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede 
almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha 
eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, 
las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en 
pantalla y  por consola.*/

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor() {
    this.agendaDeContactos = [];
  }

  aniadirContacto(contacto) {
    if (this.agendaDeContactos.length < 10) {
      this.agendaDeContactos.push(contacto);
      console.log("Contacto añadido de manera exitosa!");
      alert("Contacto añadido de manera exitosa!");
    } else {
      console.log(
        `¡Limite superado! No es posible agendar a ${contacto.nombre}`
      );
      alert(`¡Limite superado! No es posible agendar a ${contacto.nombre}`);
    }
  }

  existeContacto(contacto) {
    const existe = this.agendaDeContactos.some(
      (c) => c.nombre === contacto.nombre
    );
    if (existe) {
      console.log(`El contacto ${contacto.nombre} ya existe`);
      alert(`El contacto ${contacto.nombre} ya existe`);
    } else {
      console.log(`El contacto ${contacto.nombre} no existe aún`);
      alert(`El contacto ${contacto.nombre} no existe aún`);
    }
  }

  listarContactos() {
    if (this.agendaDeContactos.length > 0) {
      for (let i = 0; i < this.agendaDeContactos.length; i++) {
        console.log(
          `Contacto número ${i + 1}: Nombre: ${
            this.agendaDeContactos[i].nombre
          } - Número: ${this.agendaDeContactos[i].telefono}`
        );
        alert(
          `Contacto número ${i + 1}: Nombre: ${
            this.agendaDeContactos[i].nombre
          } - Número: ${this.agendaDeContactos[i].telefono}`
        );
      }
    } else {
      console.log("Aun no existe ningun contacto");
      alert("Aun no existe ningun contacto");
    }
  }

  buscarContacto(nombre) {
    let bandera = true;
    for (let i = 0; i < this.agendaDeContactos.length; i++) {
      if (nombre === this.agendaDeContactos[i].nombre) {
        console.log(`Su número: ${this.agendaDeContactos[i].telefono}`);
        alert(`Su número: ${this.agendaDeContactos[i].telefono}`);
        bandera = false;
        break;
      }
    }
    if (bandera === true) {
      console.log(`El contacto ${nombre} no existe`);
      alert(`El contacto ${nombre} no existe`);
    }
  }

  eliminarContacto(contacto) {
    let bandera = true;
    for (let i = 0; i < this.agendaDeContactos.length; i++) {
      if (contacto === this.agendaDeContactos[i].nombre) {
        this.agendaDeContactos.splice(i, 1);
        console.log(`Se elimino exitosamente.`);
        alert(`Se elimino exitosamente.`);
        bandera = false;
        break;
      }
    }
    if (bandera === true) {
      console.log(
        `No se puede eliminar porque el contacto ${contacto} no existe`
      );
      alert(`No se puede eliminar porque el contacto ${contacto} no existe`);
    }
  }

  agendaLlena() {
    if (this.agendaDeContactos.length < 10) {
      console.log(`La agenda aún no está llena. Puedes añadir más contactos.`);
      alert(`La agenda aún no está llena. Puedes añadir más contactos.`);
    } else {
      console.log(`La agenda está llena.`);
      alert(`La agenda está llena.`);
    }
  }

  huecosLibres() {
    const huecosLibres = 10 - this.agendaDeContactos.length;
    console.log(`Aun quedan ${huecosLibres} espacios libres`);
    alert(`Aun quedan ${huecosLibres} espacios libres`);
  }
}

const miAgenda = new Agenda();

do {
  const key = parseInt(
    prompt(`==Menu:==
1: Añadir un contaco
2: Verificar si existe un contacto
3: Listar los contactos
4: Buscar un contacto
5: Eliminar un contacto
6: Verificar si la agenda esta llena
7: Verificar cuantos contactos mas se puede agendar`)
  );
  switch (key) {
    case 1:
      const nombre = prompt("Ingrese el nombre del contacto");
      const telefono = parseInt(prompt("Ingrese el telefono del contacto"));
      const nuevoContacto = new Contacto(nombre, telefono);
      miAgenda.aniadirContacto(nuevoContacto);
      break;
    case 2:
      const verificarNombre = prompt("Ingrese el nombre del contacto");
      const contactoTemporal = new Contacto(verificarNombre, 0);
      miAgenda.existeContacto(contactoTemporal);
      break;
    case 3:
      miAgenda.listarContactos();
      break;
    case 4:
      const buscarContacto = prompt("Ingrese el nombre del contacto");
      miAgenda.buscarContacto(buscarContacto);
      break;
    case 5:
      const eliminarContacto = prompt("Ingrese el nombre del contacto");
      miAgenda.eliminarContacto(eliminarContacto);
      break;
    case 6:
      miAgenda.agendaLlena();
      break;
    case 7:
      miAgenda.huecosLibres();
      break;

    default:
      alert("No selecciono ninguna opción valida");
      break;
  }
} while (confirm("¿Desea realizar otra operación?"));
