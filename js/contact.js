// dans le formulaire contact quand on clique sur envoyer
document.getElementById("contact").addEventListener("submit", function(event) {

    let error;
    
    
    let telephone = document.getElementById("telephone");

    let inputs = document.getElementsByTagName("input");

    // Pour tous les inputs
    for (let i = 0; i < inputs.length; i++) {
        // si un champs n'est pas renseigné
        if (!inputs[i].value) {
            error = "Veuillez renseigner tous les champs";
            inputs[i].style.borderColor = "red";
        }
        else {
        // si un champs est renseigné il passe au vert
        inputs[i].style.borderColor = "green";
        }
    }
        if (error) {
            // ne recharge pas la page si l'envoi n'est pas valide
            event.preventDefault();
            // Le message d'erreur s'affiche dans le p
            document.getElementById("error").innerHTML = error;
            return false;
        }
        else {
            alert("Formulaire envoyé !");
        }
    
});


function checkTelephoneNumber() {
    let numero = document.getElementById("telephone");

    regTel = /^0[6-7]{1}[0-9]{8}/;

    console.log('numéro : '+numero);

    if (numero.match(regTel)) {
        alert("ok");
    } 
    else {
        alert("ok");
}

}