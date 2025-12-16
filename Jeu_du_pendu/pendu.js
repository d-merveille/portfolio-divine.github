//le mot mystère
    function 
    pendu(){
        let motMystère = prompt("Premier joueur : entrez le mot mystère")
// création du tableau
let saisievalidee = Array(motMystère.length).fill("_");
let essais = 6;

    // Demander à l'utilisateur de saisir une lettre
    do {
        saisie = prompt("deuxieme jouer : veuillez entrer une lettre");
         // verifie si la lettre est dans le mot
        if (motMystère.includes(saisie)) {
            for (let i = 0; i < motMystère.length; i++){
                if(motMystère[i] === saisie)
                    saisievalidee[i] = saisie;
            }console.log("Bien joué")

        }else{
            console.log("Raté")
        }

    } while (essais > 0 && saisievalidee.includes("_")){
        console.log(saisievalidee.join(""));
        essais--;
        if(!saisievalidee.includes("_")){
            console.log("Félicitation vous avez gagné la partis")
        }else{
            console.log("Désolé vous avez perdu")
        }
    }

}