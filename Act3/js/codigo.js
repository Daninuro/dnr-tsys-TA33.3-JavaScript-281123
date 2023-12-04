let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

javascript1.splice(javascript1.indexOf("DOM"), 1);
javascript1.push("Objetos");

javascript1.splice(javascript1.indexOf("Arrays"), 1);
javascript1.push("ArraysDifíciles");

let copiaArray = javascript1.slice(-2);
const indiceFunciones = javascript1.indexOf("Funciones");

console.log("Array actual:", javascript1);
console.log("Copia del array con los últimos dos elementos:", copiaArray);
console.log("Índice del elemento 'Funciones':", indiceFunciones);
