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

