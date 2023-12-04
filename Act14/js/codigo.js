const recetas = [
    {
    nombre: "Tarta de Oreo",
    tiempoPreparacion: "45 min.",
    ingredientes: ["Oreo", "Azúcar", "Philadelphia", "Nata para montar", "Leche", "Manteca", "Gelatina neutra"]
    },
    {
    nombre: "Trufas",
    tiempoPreparacion: "2h",
    ingredientes: ["Nata para montar", "chocolate", "fideos de chocolate"]
    },
    {
    nombre: "Bizcocho",
    tiempoPreparacion: "15 min",
    ingredientes: ["Harina", "Azucar", "Huevos", "Pepitas de Chocolate", "Mantequilla"]
    }
];

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











