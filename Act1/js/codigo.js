function obtenerLongitudArray(arr) {
    console.log("La longitud del array es:", arr.length);
}

function obtenerElementoAleatorio(arr) {
    const indiceAleatorio = Math.floor(Math.random() * arr.length);
    const elementoAleatorio = arr[indiceAleatorio];
    console.log("Elemento aleatorio del array:", elementoAleatorio);
}

const miArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

obtenerLongitudArray(miArray);
obtenerElementoAleatorio(miArray)  