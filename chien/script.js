const chiens = [
  // ROTTWEILER
  { nom: "Rex", race: "rottweiler", age: 3, image: "images/rott/rott1.jpg" },
  { nom: "Luna", race: "rottweiler", age: 4, image: "images/rott/rott2.jpg" },
  { nom: "Thor", race: "rottweiler", age: 2, image: "images/rott/rott3.jpg" },

  // CANICHE
  { nom: "Bella", race: "caniche", age: 1, image: "images/caniche/caniche1.jpg" },
  { nom: "Snow", race: "caniche", age: 2, image: "images/caniche/caniche2.jpg" },
  { nom: "Cookie", race: "caniche", age: 3, image: "images/caniche/caniche3.jpg" },

  // BERGER ALLEMAND
  { nom: "Max", race: "berger-allemand", age: 5, image: "images/berger/berger1.jpg" },
  { nom: "Shadow", race: "berger-allemand", age: 3, image: "images/berger/berger2.jpg" },
  { nom: "Nero", race: "berger-allemand", age: 4, image: "images/berger/berger3.jpg" },

  // PITBULL
  { nom: "Rocky", race: "pitbull", age: 2, image: "images/pit/pit1.jpg" },
  { nom: "Blue", race: "pitbull", age: 1, image: "images/pit/pit2.jpg" },
  { nom: "Ghost", race: "pitbull", age: 3, image: "images/pit/pit3.jpg" }
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
