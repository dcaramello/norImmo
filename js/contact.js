// when validating the form, the following conditions are verified
document.getElementById("contact").addEventListener("submit", function(event) {

    // variables **
    let erreur;
    let regTel = /^0[6-7]{1}[0-9]{8}/;
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let telephone = document.getElementById("telephone");
    let message = document.getElementById("message");
    let sex = /^sex$/;
    let sexe = /^sexe$/;
    let con = /^con$/;
    let connard = /^connard$/;

    // Conditions **

    // check if nom is entered
    if (!nom.value) {
        erreur = "Veuillez renseigner votre nom<br>";
        nom.style.borderColor = "red";
    }
    else {
        nom.style.borderColor = "green";
    }

    // check if prenom is entered
    if (!prenom.value) {
        erreur = "Veuillez renseigner votre prénom";
        prenom.style.borderColor = "red";
    }
    else {
        prenom.style.borderColor = "green";
    }

    // check if telephone is entered and if it is valide
    if (!telephone.value || !telephone.value.match(regTel)) {
        erreur = "Veuillez renseigner un numéro de téléphone valide";
        telephone.style.borderColor = "red";
    } 
    else {
        telephone.style.borderColor = "green";
    }

    // check if message is entered and if it contains no forbidden word
    if (!message.value) {
        erreur = "Veuillez écrire votre message";
        message.style.borderColor = "red";
    }
    if (message.value.match(sex) || message.value.match(sexe) || message.value.match(con) || message.value.match(connard)) {
        erreur = "Vous avez saisi un mot interdit, c'est pas bien !"
        message.style.borderColor = "red";
    }
    
    // if error is true the page does not load with preventdefault(), else the message is sent,
    if (erreur) {
        event.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }
    else {
        alert("message envoyé !")
    }
});
