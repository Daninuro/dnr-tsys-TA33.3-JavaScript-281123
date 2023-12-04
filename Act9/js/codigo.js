const llegadaMeta = ["Clara", "Dani", "Helena", "Marc", "Juan"];

const [ganador, segundo, ...restoCompetidores] = llegadaMeta;

console.log("Ganador:", ganador);
console.log("Segundo:", segundo);
console.log("Resto de competidores:", restoCompetidores);

