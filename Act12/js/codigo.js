const personas = [
    {
    nombre: "Dani",
    edad: 27,
    ciudad: "Reus"
    },
    {
    nombre: "Clara",
    edad: 26,
    ciudad: "Barcelona"
    },
    {
    nombre: "Helena",
    edad: 24,
    ciudad: "Tarragona"
    }
];

function imprimirPropiedadParaTodos(objetos, propiedad) {
    objetos.forEach(objeto => {
    console.log(objeto[propiedad]);
    });
}

imprimirPropiedadParaTodos(personas, 'ciudad');
