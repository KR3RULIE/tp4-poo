/* Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y 
"profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de 
la clase "Persona" con diferentes valores para sus propiedades y llama a sus 
métodos "saludar" y "despedirse". */

class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar() {
        document.writeln(`Hola me llamo ${this.nombre}, ¿cómo estas? <br>`);
    }
    
    despedirse() {
        document.writeln(`Adiós, ¡que te valla bien!<br>`);
    }
}

const marcos = new Persona (
    "Marcos",
    23,
    "Programador"
)           
const joel = new Persona (
    "Joel",
    22,
    "Cheff"
)

marcos.saludar();
marcos.despedirse();
joel.saludar();
joel.despedirse();