// exercice 1

const nom = "Martin";
const anneeNaissance = "2000";
let anneeActuel = "2025";

let age = anneeActuel - anneeNaissance;

console.log("Bonjour M." + nom + " vous avez " + age + "ans");

console.log(`Bonjour M.${nom} vous avez ${age}ans`);


// exercice 2

let note_maths = 15;
let note_francais = 12;
let note_HG = 9;

let moyenne = (note_maths + note_francais + note_HG) / 3;
moyenne =
  console.log(`La moyenne est de ${moyenne}/20`);

// exercice 3

const sexe = "Homme"

if (sexe === "Homme") {
  console.log("Bonjour Monsieur");
}
else if (sexe === "femme") {
  console.log("Bonjour Madame");
}

// exercice 4

let heure = 7;

if (heure > 6 && heure <= 12) {
  console.log("c'est le matin");

} else if (heure > 12 && heure < 20) {
  console.log("c'est l'après midi");

}
else {
  console.log("c'est la nuit");

}

// exercice 5

const choix = "2";

// if(choix===1){
//     console.log("Insérer");

// }else if(choix===2){Ce choix n'existe pas
// console.log("Supprimer");

// }else if(choix===3){
//     console.log("Afficher");

// }
// else{
//     console.log("Ce choix n'existe pas");

// }

switch (choix) {
  case "1":
    console.log("Insérer");
    break;
  case "2":
    console.log("Supprimer");
    break;
  case "3":
    console.log("Afficher");
    break;
  default:
    console.log("Ce choix n'existe pas");
}
// Exercice 6

const nombre = 150;


if (nombre % 3 == 0 && nombre % 5 == 0) {
  console.log(nombre + " est un multiple de 3 et de 5");
} else {
  console.log(nombre + " n'est pas un multiple de 3 et de 5");

}

// Exercice 7

// for (let i = 44000; i <= 44999; i++) {
//   console.log("Code postal " + i);
// }

// Exercice 8 (mise en valeur du chiffre 10 non fait)

let afficherCompteur = 0;


for (let afficherCompteur = 0; afficherCompteur <= 20; afficherCompteur += 2) {
  if (afficherCompteur === 10) {
    console.info("Dix")
  }
  else {
    console.log(afficherCompteur);
  }
}





// Exercice 9

// pair ou impair
// let chiffre = 1

// if (chiffre % 2 == 0) {
//   console.log(chiffre + " est pair");

// } else {
//   console.log(chiffre + " est impair");
// }

// Nombre aléatoire
// Math.floor(Math.random() * 100);

// let nbreAlea = Math.floor(Math.random() * 100);

// console.log(nbreAlea);

// const tableau = [];
// let compteur = 0;

// while (compteur <= 2) {
//   if (compteur === 0) {
//     nbreAlea = Math.floor(Math.random() * 100)
//     if (nbreAlea % 2 === 0){
//       tableau.push(nbreAlea);
//       compteur++;
//     }
//   }
//     if (compteur >= 1) {
//     nbreAlea = Math.floor(Math.random() * 100)
//     if (nbreAlea % 2 !== 0 ){
//       tableau.push(nbreAlea);
//       compteur++;
//     }
//   }
// }
// console.log(tableau);
// console.table(tableau);

// exercice 10
// utilisation de while

// let compteur = 1;
// let nombres ;

// while (nombres !== 666) {
//  nombres = Math.floor(Math.random() * 1000);
//  compteur++
// }

// console.log(compteur);
// console.log(nombres);

// utilisation de for


let compteur = 0;
let nombres;

for (; ;) { // Boucle for infinie (la condition de fin est vide)
  nombres = Math.floor(Math.random() * 1000);
  compteur++;
  if (nombres === 666) {
    break; // Sort de la boucle for lorsque nombres est égal à 666
  }
}

console.log("Le nombre 666 a été trouvé après", compteur, "tentatives.");

// Exercice 11

let instant = new Date
let day = instant.getDate();
let month = instant.getMonth() + 1;
let year = instant.getFullYear();
let hours = instant.getHours();
let minutes = instant.getMinutes() ;

//  / instant.getMonth() / instant.getFullYear();
console.log(`Aujourd'hui nous somme le ${day}/${month}/${year} et il est ${hours}:${minutes} `);
