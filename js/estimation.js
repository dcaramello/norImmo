function submit() {
let nbrChambres = document.getElementById("inputNbrChambres").value;
let surface = document.getElementById("inputSurface").value;
let materiau = document.getElementById("inputMateriau").value;
let coef="";



if (materiau===1){
coef = 1.15
}
else if (materiau===2){
coef = 1.3
}
else {
    coef = 1.2
}
let tarif = coef *(nbrChambres*10000+surface*1000);

let resultat = document.getElementById("resultat");
resultat.innerText = tarif +" euros";
// console.log(materiau);
// console.log(surface);
// console.log(coef);
// console.log(tarif);
}