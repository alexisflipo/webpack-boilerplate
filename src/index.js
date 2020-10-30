function abracadabra() {

  let prenom = prompt('Quel est votre prénom ?');
  let nom = prompt('Quel est votre nom ?');
  let age = prompt('Quel est votre age ?');

  alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, "
    + prenom
    + " ! Euh... Je veux dire... Monsieur le grand magicien "
    + nom
    + " ! Cela fait déjà "
    + age
    + " ans que vous faites rayonner notre contrée !");
}

function calculerIMC(poids, taille) {
  let resultat = (poids /Math.pow((taille / 100), 2));
  return resultat;
}

let poids = prompt("Quel est votre poids ? (en kg)")
let taille = prompt("Quel est votre taille ? (en cm)")

alert(calculerIMC(poids, taille));

