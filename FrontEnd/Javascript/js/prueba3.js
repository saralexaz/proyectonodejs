/* Elabore un Script JS con el uso de funciones para leer los datos de una persona (apellido, nombre, año
de nacimiento, año actual. Calcular la edad y determinar si es mayor o menor de edad (tipo booleano).
Muestre por pantalla los datos de identificación y un mensaje que indique si es menor o mayor de
edad.*/

function datos(){
    const apellido= obtenerdato('apellido');
    const nombre = obtenerdato('nombre');
    const a_nac = obtenerano('año de nacimiento');
    const a_actual = obteneranoactual('año actual');

    const edad= calcularedad(a_nac, a_actual);

    const mayor = mayoredad(edad);

    mostrarresultados(nombre, apellido, edad, mayor)

}

function obtenerdato(campo){
    let dato="";
    do{
        dato =prompt(`Ingrese el ${campo} de la persona`);
        if (dato === null || dato === "") {
            alert(`El ${campo} no puede estar vacío. Por favor, intente de nuevo.`);
        }
    } while (dato === null || dato === "");
    return dato;
}

function obtenerano(){
    let anio;
    const aniomaximo = new date().getfullyear();

    const input = prompt('Ingrese año de nacimiento YYYY: ');
    anio = parseInt(input
        if (isNaN(anio) || anio < 1900 || anio > anioMaximo) {
            alert(`El año de nacimiento ingresado no es válido. Debe ser un número entre 1900 y ${anioMaximo}.`);
        }
    } while (isNaN(anio) || anio < 1900 || anio > anioMaximo);
    return anio;
    )