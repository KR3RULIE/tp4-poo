/* Crea un objeto llamado auto que tenga algunas características 
como el color, marca, modelo y si está encendido o apagado. Crea 
los métodos necesarios para permitir encender y apagar el auto. */

const auto = {
  color: "Azul",
  marca: "Ferrari",
  modelo: "VWW 577",
  estado: false,

  encender: function () {
    if (this.estado === false) {
      document.writeln(`<p>El auto se encendió</p>`);
      this.estado = true;
    }
  },
  apagar: function () {
    if (this.estado === true) {
      document.writeln(`<p>EL auto se apagó</p>`);
      this.estado = false;
    }
  },
};

auto.encender();
auto.apagar();