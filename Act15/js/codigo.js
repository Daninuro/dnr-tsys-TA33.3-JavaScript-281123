class Receta {
    constructor(nombre, tiempoPreparacion, ingredientes) {
    this.nombre = nombre;
    this.tiempoPreparacion = tiempoPreparacion;
    this.ingredientes = ingredientes;
    }
}

const recetaOreo = new Receta(
    "Tarta de Oreo",
    "45 min.",
    ["Oreo", "Azúcar", "Philadelphia", "Nata para montar", "Leche", "Manteca", "Gelatina neutra"]
);

const recetaTrufas = new Receta(
    "Trufas",
    "2h",
    ["Nata para montar", "chocolate", "fideos de chocolate"]
);

const recetaBizcocho = new Receta(
    "Bizcocho",
    "15 min",
    ["Harina", "Azucar", "Huevos", "Pepitas de Chocolate", "Mantequilla"]
);

const recetas = [recetaOreo, recetaTrufas, recetaBizcocho];

function imprimirReceta(receta) {
    console.log("Nombre de la receta:", receta.nombre);
    console.log("Tiempo de preparación:", receta.tiempoPreparacion);
    console.log("Ingredientes:");

    receta.ingredientes.forEach(ingrediente => {
    console.log("- " + ingrediente);
    });

    console.log("\n"); 
}

recetas.forEach(imprimirReceta);
