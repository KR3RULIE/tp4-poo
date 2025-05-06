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
    } else {
      document.writeln(
        `¡Limite superado! No es posible agendar a ${contacto.nombre}`
      );
    }
  }

  existeContacto(contacto) {
    const existe = this.agendaDeContactos.some(
      (c) => c.nombre === contacto.nombre
    );
    if (existe) {
      document.writeln(`El contacto ${contacto.nombre} ya existe`);
    } else {
      document.writeln(`El contacto ${contacto.nombre} no existe aún`);
    }
  }

  listarContactos() {
    document.writeln(`<ul>`);
    for (let i = 0; i < this.agendaDeContactos.length; i++) {
      document.writeln(
        `<li>Nombre: ${this.agendaDeContactos[i].nombre} - Número: ${this.agendaDeContactos[i].telefono}</li>`
      );
    }
    document.writeln(`</ul>`);
  }

  buscarContacto(nombre) {
    let bandera = true;
    for (let i = 0; i < this.agendaDeContactos.length; i++) {
      if (nombre === this.agendaDeContactos[i].nombre) {
        document.writeln(`Su número: ${this.agendaDeContactos[i].telefono}`);
        bandera = false;
        break;
      }
    }
    if (bandera === true) {
      document.writeln(`El contacto ${nombre} no existe`);
    }
  }

  eliminarContacto(contacto) {
    let bandera = true;
    for (let i = 0; i < this.agendaDeContactos.length; i++) {
      if (contacto === this.agendaDeContactos[i].nombre) {
        this.agendaDeContactos.splice(i, 1);
        document.writeln(`Se elimino exitosamente.`);
        bandera = false;
        break;
      }
    }
    if (bandera === true) {
      document.writeln(
        `No se puede eliminar porque el contacto ${contacto} no existe`
      );
    }
  }

  agendaLlena() {
    if (this.agendaDeContactos.length < 10) {
      document.writeln(
        `La agenda aún no está llena. Puedes añadir más contactos.`
      );
    } else {
      document.writeln(`La agenda está llena.`);
    }
  }
}
