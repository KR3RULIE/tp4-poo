/* crear una clase aeropuerto con las propiedades nombreAeropuerto y lista 
de aviones, esta clase deberá contener el método agregarAvion, el cual 
recibirá un objeto de tipo Avión, además de un método buscarAvion el cual 
recibirá el nombre de un avión y devolverá información en caso de encontrarlo, 
si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista 
de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero 
suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar 
un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 
objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, 
buscar un avión y usar el método abordar. */

class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaDeAviones = [];
  }

  agregarAvion(avion) {
    this.listaDeAviones.push(avion);
  }

  buscarAvion(avionBuscado) {
    const avionEncontrado = this.listaDeAviones.find(
      (avion) => avion.nombre === avionBuscado
    );

    if (this.listaDeAviones.find((avion) => avion.nombre === avionBuscado)) {
      document.writeln(
        `<p>El avion ${avionEncontrado.nombre} que buscas se encuentra en el ${this.nombreAeropuerto} rumbo a ${avionEncontrado.destino}</p>`
      );
      return avionEncontrado;
    } else {
      document.writeln(`El avion que busca no existe`);
      return null;
    }
  }
}

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaDePasajeros = [];
  }

  abordar(pasajero) {
    if (this.listaDePasajeros.length <= this.capacidad) {
      this.listaDePasajeros.push(pasajero);
    } else {
      document.writeln(
        `<p>EL PASAJERO ${pasajero} NO PUEDE ABORDAR PORQUE SE EXEDIÓ LA CAPACIDAD MAXIMA DE PASAJEROS</p>`
      );
    }
  }
}

const aeropuerto = new Aeropuerto("Aeropuerto Internacional");

const avion1 = new Avion("Kardiel", 2, "Honya");
const avion2 = new Avion("Bedel del Relicario", 2, "Noxus");
const avion3 = new Avion("K'Sante", 2, "Demacia");

aeropuerto.listaDeAviones.push(avion1);
aeropuerto.listaDeAviones.push(avion2);
aeropuerto.listaDeAviones.push(avion3);

let avion = aeropuerto.buscarAvion("Kardiel");

if (avion) {
  avion.abordar("Juan Pérez");
  avion.abordar("Ana Torres");
  avion.abordar("Carlos Ruiz");
  avion.abordar("Marcos Tebis");
}

document.writeln(`<br>Pasajeros a bordo de ${avion.nombre}:<br>`);
avion.listaDePasajeros.forEach((pasajero) => {
  document.writeln(`- ${pasajero}<br>`);
});
