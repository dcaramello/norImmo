// -----------------        norImmo     --------------------
// =========================================================

//             Home page with the image carousel
// *********************************************************


// An array that contains the images of the carousel
// the indexImages variable corresponds to the position in the array
let images = new Array("img/maison1.jpg", "img/maison2.jpg", "img/maison3.jpg");
let indexImages = 0;

let descriptions = new Array("Vous voulez une piscine ?", "Il vous faut 2 garages ?","Vous aimez les cubes ?");
let indexDescriptions = 0;


// ChangeImage function which changes the images of the carousel if you click on "<" or ">"
// It takes in parameter flecheDirection, which retrieves the value -1 for "<"" or 1 for ">" with onclick
// If we click on next indexImages and indexDescriptions are incremented
// If we exceed the number of elements of the array indexImages and indexDescriptions are reset to 0
function changeImage(flecheDirection) {
    // image management
    indexImages = indexImages + flecheDirection;
    if (indexImages < 0){
        indexImages = images.length - 1;
    }
    if (indexImages > images.length - 1) {
        indexImages = 0;
    }
    
    document.getElementById("carousel").src = images[indexImages];
    console.log(indexImages);

    // description management
    indexDescriptions = indexDescriptions + flecheDirection;
    if (indexDescriptions < 0){
        indexDescriptions = descriptions.length - 1;
    }
    if (indexDescriptions > descriptions.length - 1) {
        indexDescriptions = 0;
    }
    
    document.getElementById("description").innerHTML = descriptions[indexDescriptions];
    console.log(indexDescriptions);
}

// -------------------------------------

// Function changeImageAuto qui incrémente les positions des array images et descriptions
// If we arrive at the last element of the array we start again at 0
function changeImageAuto() {
    // image management
    document.getElementById("carousel").src = images[indexImages];
    if (indexImages == 2) {
        indexImages = 0;
    }
    else {
        indexImages ++;
    }

    // description management
    document.getElementById("description").innerHTML = descriptions[indexDescriptions];
    if (indexDescriptions == 2) {
        indexDescriptions = 0;
    }
    else {
        indexDescriptions ++;
    }
}

// We call the changeImageAuto function with setInterval () to increment the images and descriptions every 3 seconds
setInterval(changeImageAuto, 3000);



