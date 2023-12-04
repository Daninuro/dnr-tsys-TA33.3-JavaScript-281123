const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imprimirMayoresQue5(numeros) {
    const mayoresQue5 = numeros.filter(numero => numero > 5);
    console.log("Números mayores que 5:", mayoresQue5);
}

imprimirMayoresQue5(numeros);