const persona = {
    nombre: "Clara",
    apellidos: "Ribera Pérez",
    edad: 24,
    direccion: "Rambla Nova",
    ciudad: "Barcelona",
    pais: "España"
};

function nombreCompleto(persona) {
    const { nombre, apellidos } = persona;
    console.log("Nombre completo:", `${nombre} ${apellidos}`);
}

nombreCompleto(persona);
