
const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
const javascript2 = ["Objetos", "Arrays", "ParseInt"];

function encontrarElementoRepetido(arr1, arr2) {
    const elementosRepetidos = [];

    for (let elemento of arr1) {
    if (arr2.includes(elemento) && !elementosRepetidos.includes(elemento)) {
        elementosRepetidos.push(elemento);
    }
    }

    if (elementosRepetidos.length > 0) {
    console.log("Elementos repetidos:", elementosRepetidos);
    } else {
    console.log("No hay elementos repetidos entre los arrays.");
    }
}

encontrarElementoRepetido(javascript1, javascript2);
