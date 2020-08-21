let articles = document.getElementsByTagName("article");
let cardTexts = document.getElementsByClassName("card-text");


for(let article of articles) {
    article.style.backgroundColor = "lightblue";
}

// Fonction déclenchée par le bouton d'aide
function displayAnswer(index) {
// On récupère et on modifie le paragraphe
    let paragraphe = cardTexts[index];
    if (paragraphe.style.display==="none"){
        paragraphe.style.display="flex"
    }
    else {
        paragraphe.style.display="none"
    };
}
