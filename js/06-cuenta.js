/* Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:

-Una propiedad titular con el valor "Alex".

-Una propiedad saldo, teniendo como valor inicial 0.

-Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad 
como parámetro

-Un método extraer() que permita retirar la cantidad pasada como parámetro.

-Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a 
mostrar la descripción del estado de la cuenta.
 */

const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (nuevoSaldo) {
    return this.saldo += nuevoSaldo;
  },
  extraer: function (retirarSaldo) {
    return this.saldo -= retirarSaldo;
  },
  informar: function () {
    alert(`Titular: ${this.titular} \t Saldo es: $${this.saldo}`);
  },
};

do {
    const accion = parseInt(
      prompt(
        `¿Qué acción desea realizar? \r -1: Ingresar saldo \r -2: Extraer saldo \r -3: Consultar información`
      )
    );
    switch (accion) {
      case 1:
        const nuevoSaldo = parseInt(prompt("Ingrese el monto:"))
        cuenta.ingresar(nuevoSaldo)
        alert("¡Saldo ingresado de manera EXITOSA!")
        break;
      case 2:
        const retirarSaldo = parseInt(prompt("Ingrese el monto:"))
        cuenta.extraer(retirarSaldo)
        alert("¡Saldo extraido de manera EXITOSA!")
        break;
      case 3:
        cuenta.informar()
        break;
    
      default:
        alert("¡Debes ingresar una opcción correcta!")
        break;
    }
} while (confirm("¿Desea realizar otra acción?"));
