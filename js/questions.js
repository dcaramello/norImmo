let articles = document.getElementsByTagName("article");
let cardTexts = document.getElementsByClassName("card-text");
let spans =document.getElementsByClassName("questionSpan");


for (span of spans){
    span.innerText ="↓";
}

for(let article of articles) {
    article.style.backgroundColor = "lightblue";
}

// je cache les réponses au chargement
for(let paragraphe of cardTexts) {
    paragraphe.style.display="none";
}

// Fonction déclenchée par le bouton d'aide
function displayAnswer(index) {
// On récupère et on modifie le paragraphe
    let paragraphe = cardTexts[index];
    let span = spans[index];
    if (paragraphe.style.display==="none"){
        paragraphe.style.display="flex";
        span.innerText ="↑";
    }
    else {
        paragraphe.style.display="none";
        span.innerText ="↓";
    };
}
