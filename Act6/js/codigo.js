const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function dividirNumerosParesImpares(numeros) {
    const pares = [];
    const impares = [];

    for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
    }

    return { pares, impares };
}

const { pares, impares } = dividirNumerosParesImpares(numeros);

const numerosConcatenados = pares.concat(impares);

console.log("Números Pares:", pares);
console.log("Números Impares:", impares);
console.log("Números Concatenados:", numerosConcatenados);
