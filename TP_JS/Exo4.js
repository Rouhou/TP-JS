const multiplierParDeux = (nombre) => {
  return nombre * 2;
};

// 2. Utilisez cette fonction pour multiplier un nombre de votre choix et affichez le résultat.
let nombreChoisi = 5;
let nombreChoisi2 = 16;
let resultat = multiplierParDeux(nombreChoisi);
console.log("Le double de", nombreChoisi, "est", resultat);

// 3. Modifiez la fonction pour qu'elle utilise une variable du scope externe (utilisez une closure)
const creerFonctionMultiplier = () => {
  let multiplicateur = 2;

  const multiplier = (nombre) => {
    return nombre * multiplicateur;
  };

  return multiplier;
};

let fonctionMultiplier = creerFonctionMultiplier();
let resultat2 = fonctionMultiplier(nombreChoisi2);
console.log("Le double de", nombreChoisi2, "est", resultat2);
