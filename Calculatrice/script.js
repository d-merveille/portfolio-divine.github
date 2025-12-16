// --- Boucle principale ---
function calculatrice(){
    let choix;

do {
    // Afficher le menu à l'utilisateur
    choix = prompt(
        "Choisissez une opération :\n" +
        "1 → Addition\n" +
        "2 → Soustraction\n" +
        "3 → Multiplication\n" +
        "4 → Division\n" +
        "5 → Sortie"
    );

    // Convertir la saisie en nombre
    choix = parseInt(choix);

    // Si l'utilisateur ne veut pas sortir
    if (choix >= 1 && choix <= 4) {
        // Demander les deux nombres
        let a = parseFloat(prompt("Entrez le premier nombre :"));
        let b = parseFloat(prompt("Entrez le deuxième nombre :"));
        let resultat;
        

        // Appeler la fonction correspondant au choix
        switch (choix) {
            case 1:
                resultat = addition(a, b);
                break;
            case 2:
                resultat = soustraction(a, b);
                break;
            case 3:
                resultat = multiplication(a, b);
                break;
            case 4:
                resultat = division(a, b);
                break;
        }

        // Afficher le résultat
        alert("Le résultat est : " + resultat);
    } else if (choix !== 5) {
        alert("Choix invalide. Veuillez entrer un nombre entre 1 et 5.");
    }

} while (choix !== 5); // La boucle s'arrête quand on choisit "5 → sortie"

alert("Merci d'avoir utilisé la calculatrice !");
}


function  addition(a,b){
    return a + b
}
function  soustraction(a,b){
    return a - b
}
function  multiplication(a,b){
    return a * b
}
function  division(a,b){
    return a / b
}
