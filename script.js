
var  heuresDiv = document.querySelector(".heures");
var dateDiv = document.querySelector(".date");

var affichageHeure = function(){
    //Déclaration des varibles
    var today, annee, listeMois, mois, listeJours, jourNumero, jourNom, heures, minutes, secondes, deuxChiffres;

    //Récupération de la date actuelle
    today = new Date();

    //Récupération de l'année
    annee = today.getFullYear();

    //Récupération des mois 
    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    mois = listeMois[today.getMonth()];

    //Récupération du numéro jour du mois 
    jourNumero = today.getDate();

    //Récupération du jour 
    listeJours = ["Dimancche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()];

    //Affichage des heures, minutes, et secondes avec deux chiffres
    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        }else{
            return element;
        }
    }

    // Récupération des heures 
    heures = deuxChiffres(today.getHours());

    //Récupoération des minutes
    minutes = deuxChiffres(today.getMinutes());

    //Récupératuion des secondes 
    secondes = deuxChiffres(today.getSeconds());

    //affichage des Div
    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + ", " + jourNumero + " " + mois + " " + annee;

    //Lancement de la fonction
    setTimeout(affichageHeure, 1000);
}
 
//Lancement de la fonction au debut 
affichageHeure();
