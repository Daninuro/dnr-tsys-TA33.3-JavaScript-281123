function listarPlanetas(planetas) {
    console.log("Lista de planetas del Sistema Solar:");
    for (let i = 0; i < planetas.length; i++) {
    console.log(planetas[i]);
    }
}

const planetasSistemaSolar = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"];

listarPlanetas(planetasSistemaSolar);
