// fonctionalité 1
var clicFooter = document.querySelector("footer");
let counter = 0;
clicFooter.addEventListener("click", function(){ 
    counter++; //counter++ augmente la valeur de counter de 1 à chaque clic
    console.log("clique numéro :" + counter);

});


// fonctionalité 2
var clicHambMenu = document.querySelector(".navbar-toggler");
clicHambMenu.addEventListener("click", function(){

    var navbarHeaderElement = document.getElementById("navbarHeader");
    navbarHeaderElement.classList.toggle("collapse");

}); 

// fonctionalité 3

var cardsElement = document.getElementsByTagName("div")[11]; //selectione la carte
// correction GPT : var firstCard = document.querySelectorAll(".card")[0];
console.log(cardsElement); //vérif

var clicOnEditBtn1 = cardsElement.querySelector(".btn.btn-sm.btn-outline-secondary"); //selectionne bouton edit
console.log(clicOnEditBtn1); //vérif
clicOnEditBtn1.addEventListener("click", function(){
    cardsElement.style.color = "red"; //change la couleur du texte
    
});


// fonctionalité 4
var secondCard = document.querySelectorAll(".card")[1]; //selectione la 2nd carte
console.log(secondCard); //vérif

var clicOnEditBtn2 = secondCard.querySelector(".btn.btn-sm.btn-outline-secondary"); //selectionne bouton edit
console.log(clicOnEditBtn2); //vérif
clicOnEditBtn2.addEventListener("click", function(){
   

    if (secondCard.style.color === 'green'){

        secondCard.style.color = '' ;
        
        }else {secondCard.style.color = 'green' };
    
});


// fonctionalité 5

var navbar = document.querySelector(".navbar");
var bootstrapLink = document.querySelector("link[rel='stylesheet']");

navbar.addEventListener("dblclick", function(){

    bootstrapLink.disabled = !bootstrapLink.disabled;
});

// fonctionalité 6
var firstCard = document.querySelectorAll(".card")[0];
var viewButton = firstCard.querySelector(".btn.btn-sm.btn-success");

var cardImage = firstCard.querySelector(".card-img-top");
var cardText = firstCard.querySelector(".card-text");


viewButton.addEventListener("mouseover", function() {
    // Réduire l'image
    cardImage.style.width = "20%";
    // zffacer le texte
    cardText.classList.toggle("card-text");
});

viewButton.addEventListener("mouseout", function() {
    // Rétablir la taille normale de l'image
    cardImage.style.width = "100%";
    // Réafficher le texte
    cardText.classList.toggle("card-text");
});

// pour toutes les cards :
var allCards = document.querySelectorAll(".card"); //retourne un array : il faut un for each
allCards.forEach(function(card) {

    var viewButton = card.querySelector(".btn.btn-sm.btn-success");

    var cardImage = card.querySelector(".card-img-top");
    var cardText = card.querySelector(".card-text");


    viewButton.addEventListener("mouseover", function() {
        // Réduire l'image
        cardImage.style.width = "20%";
        // zffacer le texte
        cardText.classList.toggle("card-text");
    });

    viewButton.addEventListener("mouseout", function() {
        // Rétablir la taille normale de l'image
        cardImage.style.width = "100%";
        // Réafficher le texte
        cardText.classList.toggle("card-text");
    });

});


// fonctionalité 7
 var bannerElements = document.querySelector(".jumbotron.text-center");
 var grisBtn = bannerElements.querySelector(".btn.btn-secondary.my-2");
 console.log(grisBtn); //verif

 var cardParent = document.querySelector(".album.py-5.bg-light");

 grisBtn.addEventListener("click", function() { 

    var allCards = cardParent.querySelectorAll(".card");

     // Sélectionner la dernière card
    var lastCard = allCards[allCards.length - 1];

     // Déplacer la dernière card avant la première
    cardParent.insertBefore(lastCard, allCards[0]);
 });
