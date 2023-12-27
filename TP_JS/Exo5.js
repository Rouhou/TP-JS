class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  anniversaire() {
    this.age++;
  }
}

const personne1 = new Personne("Issa Diagne", 22);
personne1.anniversaire();
console.log(`Salut ${personne1.nom} vous avez ${personne1.age} ans`);
