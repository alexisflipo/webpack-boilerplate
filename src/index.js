// function abracadabra() {

//   let prenom = prompt('Quel est votre prénom ?');
//   let nom = prompt('Quel est votre nom ?');
//   let age = prompt('Quel est votre age ?');

//   alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, "
//     + prenom
//     + " ! Euh... Je veux dire... Monsieur le grand magicien "
//     + nom
//     + " ! Cela fait déjà "
//     + age
//     + " ans que vous faites rayonner notre contrée !");
// }

// function calculerIMC(poids, taille) {
//   let resultat = (poids /Math.pow((taille / 100), 2));
//   return resultat;
// }

// let poids = prompt("Quel est votre poids ? (en kg)")
// let taille = prompt("Quel est votre taille ? (en cm)")

// alert(calculerIMC(poids, taille));

// let age = prompt("Quel est votre age ?")
// if (age < 18) {
//   alert("Vous n'êtes pas majeur");
// } else if (age < 21) {
//   alert("Vous êtes majeur en France");
// } else {
//   alert("Vous êtes majeur partout");
// }

// let consommable = "chocolat";

// switch(consommable) {
//   case "courgette":
//   case "pomme de terre":
//   case "carotte":
//     console.log('Ceci est un légume');
//     break;
//   case "banane":
//     console.log('Ceci est un fruit');
//     break;
//   default:
//     console.log('Ceci n\'est ni un fruit ni un légume');
// }

let gareDeDepart = "";
let gareDarrivee = "";
let chauffeur    = "";

if ((gareDeDepart != "" || gareDarrivee != "") && chauffeur != "") {
  console.log("Le train va démarrer");
} else {
  console.log("Le train ne peut pas démarrer");
}
