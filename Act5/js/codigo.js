const arrayUno = [1, 2, 3];
const arrayDos = [4, 5, 6];

function intercalarArrays(arrayUno, arrayDos) {
    const nuevoArray = [];

    for (let i = 0; i < arrayUno.length; i++) {
    nuevoArray.push(arrayUno[i]);
    nuevoArray.push(arrayDos[i]);
    }

    return nuevoArray;
}

const arrayIntercalado = intercalarArrays(arrayUno, arrayDos);

console.log("Array Uno:", arrayUno);
console.log("Array Dos:", arrayDos);
console.log("Array Intercalado:", arrayIntercalado);
