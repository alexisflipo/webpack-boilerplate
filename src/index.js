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

// let gareDeDepart = "";
// let gareDarrivee = "";
// let chauffeur    = "";

// if ((gareDeDepart != "" || gareDarrivee != "") && chauffeur != "") {
//   console.log("Le train va démarrer");
// } else {
//   console.log("Le train ne peut pas démarrer");
// }

// let x = 5;

// x > 3 ? console.log("X supérieur à trois") : console.log("X inférieur à trois");

// let i = 1;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// do {
//   var prenom = prompt("Quel est votre prénom?");
// } while (prenom == "" || prenom == null)

// alert(`Bonjour ${prenom}`);

// for (let i = 1; i < 5; i++) {
//   console.log('Ligne : ' + i);
// }


try {
  // Erreur ?
  let recompense = prompt("Choisissez une récompense : épée, arc, haches");
  let degats;

  switch(recompense) {
    case 'épée':
      degats = 40;
      break;
    case 'arc':
      degats = 30;
      break;
    case'haches':
      degats = 20;
      break;
    default:
      throw new Error('Vous ne pouvez pas tricher.');
  }

  alert('Vous avez choisi : ' + recompense + ' (' + degats + ' dégats).');
}
catch(error) {
  // Erreur !
  alert(error);
}
finally {
  alert('Fin du programme');
}
