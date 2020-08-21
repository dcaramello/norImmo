// -----------------        norImmo     --------------------
// ---------------------------------------------------------

//             Page d'accueil avec le carousel d'images
// ---------------------------------------------------------


// Un array qui contient les images du carousel
// la variable position correspond à la position dans le tableau
let carousel = new Array("img/maison1.jpg", "img/maison2.jpg", "img/maison3.jpg");
let position = 0;


// Fonction changeImage qui change les images du carousel si on clique sur "<" ou ">"
// Elle prend en parametre fleche, qui récupere la valeur -1 pour précédent ou 1 pour suivant avec onclick
// Si on clique sur suivant position et incrémentée
// Si on dépasse le nombre d'éléments du array position est réinitialié a 0
function changeImage(flecheDirection) {
    position = position + flecheDirection;
    if (position < 0){
        position = carousel.length - 1;
    }
    if (position > carousel.length - 1) {
        position = 0;
    }
    document.getElementById("carousel").src = carousel[position];
    console.log(position);
}


// Function changeImageAuto qui incrémente les postions du array
// Si on arrive au dernier élément du tableau on repart a 0
function changeImageAuto() {
    document.getElementById("carousel").src = carousel[position];
    if (position == 2) {
        position = 0;
    }
    else {
        position ++;
    }
}

// On appel la fonction changeImageAuto() avec setInterval() pour incrémenter toutes les 3 secondes
setInterval(changeImageAuto, 3000);