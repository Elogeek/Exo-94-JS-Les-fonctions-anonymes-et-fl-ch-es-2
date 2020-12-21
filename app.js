let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
let creerDiv = (text) => {
    let divHTML = document.createElement("div");
    divHTML.innerHTML = text;
    document.body.appendChild(divHTML)
}

//TableauUn
let tableauTrois = tableauUn.map(item => item ** item);
creerDiv("TableauUn: item ** item => " + tableauTrois);

let tableauQuatre = tableauUn.map(item => item * 10);
creerDiv("TableauUn: item * 100 => " + tableauQuatre);

let tableauCinq = tableauUn.map(item => (item + 2) / 28);
creerDiv("TableauUn: item * 100 => " + tableauQuatre);

let tableauSix = tableauUn.filter(item => item > 2);
creerDiv("TableauUn: item > 2 => " + tableauSix);

let tableauSept = tableauUn.filter(item => item % 2);
creerDiv("TableuUn: item % 2 => " + tableauSept);

let tableauHuit = tableauUn.filter(item => (item * 3) > 10);
creerDiv("TableauUn: (item * 3) > 10 => " + tableauHuit);

//TableauDeux
let tableauNeuf = tableauDeux.map(item => item.length);
creerDiv("TableauDeux: item.length => " + tableauNeuf);

let tableauDix = tableauDeux.map(item => "L'élément " + item + " à une longeur de " + item.length);
creerDiv("TableauDeux: item + item.length => " + tableauDix);

let tableauOnze = tableauDeux.map(item => item + item );
creerDiv("TableauDeux: item + item => " + tableauOnze);

let tableauDouze = tableauDeux.filter(item => item.length > (2 + 2));
creerDiv("TableauDeux: item.length > (2 + 2) => " + tableauDouze);

let tableauTreize = tableauDeux.filter(item => item.length % 2);
creerDiv("TableauDeux: item.length % 2 => " + tableauTreize);

let tableauQuatorze = tableauDeux.filter(item => (item.length - 3) > 10);
creerDiv("TableauDeux: (item.length - 3) > 10 => " + tableauQuatorze);