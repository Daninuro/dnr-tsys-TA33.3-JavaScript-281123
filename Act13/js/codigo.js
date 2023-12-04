const receta = {
    nombre: "Tarta de Oreo",
    tiempoPreparacion: "45 min.",
    ingredientes: ["Oreo", "Azúcar", "Philadelphia", "Nata para montar", "Leche", "Manteca", "Gelatina neutra"]
};

function imprimirReceta(receta) {
    console.log("Nombre de la receta:", receta.nombre);
    console.log("Tiempo de preparación:", receta.tiempoPreparacion);
    console.log("Ingredientes:");

    receta.ingredientes.forEach(ingrediente => {
    console.log("- " + ingrediente);
    });
}

imprimirReceta(receta);
