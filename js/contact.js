// *********************
// when validating the form, the following conditions are verified
// if an input is not valid, do not reload the page with preventdefault ()
document.getElementById("contact").addEventListener("submit", function(event) {
	
    // variables **
    let regTel = /^0[6-7]{1}[0-9]{8}/;
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let telephone = document.getElementById("telephone");
    let message = document.getElementById("message");


    // Conditions **

    // *****
    // check if nom is entered
    if (!nom.value) {
        event.preventDefault();
        document.getElementById("errorNom").innerHTML = "Veuillez renseigner votre nom<br>";
        nom.style.borderColor = "red";
    }
    else {
        nom.style.borderColor = "green";
    }
    // *****
    // check if prenom is entered
    if (!prenom.value) {
        event.preventDefault();
        document.getElementById("errorPrenom").innerHTML = "Veuillez renseigner votre prénom";
        prenom.style.borderColor = "red";
    }
    else {
        prenom.style.borderColor = "green";
    }
    // *****
    // check if telephone is entered and if it is valide
    if (!telephone.value || !telephone.value.match(regTel)) {
        event.preventDefault();
        document.getElementById("errorTelephone").innerHTML = "Veuillez renseigner un numéro de téléphone valide";
        telephone.style.borderColor = "red";
    } 
    else {
        telephone.style.borderColor = "green";
    }
    // *****
    // check if message is entered and if it contains no forbidden word
    if (!message.value) {
        event.preventDefault();
        document.getElementById("errorMessage").innerHTML = "Veuillez écrire votre message";
    }
    
});
