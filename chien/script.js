// Base de données simple
const chiens = [
  { nom: "Rex", race: "rottweiler", age: 3, image: "https://place-puppy.com/300x300" },
  { nom: "Bella", race: "caniche", age: 2, image: "https://place-puppy.com/301x301" },
  { nom: "Max", race: "berger-allemand", age: 4, image: "https://place-puppy.com/302x302" },
  { nom: "Rocky", race: "pitbull", age: 1, image: "https://place-puppy.com/303x303" },
  { nom: "Luna", race: "rottweiler", age: 5, image: "https://place-puppy.com/304x304" },
  { nom: "Snow", race: "caniche", age: 1, image: "https://place-puppy.com/305x305" }
];

// Récupération de la race dans l'URL
const params = new URLSearchParams(window.location.search);
const raceChoisie = params.get("race");

// Mise à jour du titre
if (raceChoisie) {
  document.getElementById("titreRace").textContent =
    "Chiens de race : " + raceChoisie;
}

// Filtrage
const chiensFiltres = chiens.filter(c => c.race === raceChoisie);

// Affichage
const container = document.getElementById("listeChiens");

chiensFiltres.forEach(chien => {
  container.innerHTML += `
    <div class="carte-chien">
      <img src="${chien.image}" alt="${chien.nom}">
      <h3>${chien.nom}</h3>
      <p>Âge : ${chien.age} ans</p>
    </div>
  `;
});
