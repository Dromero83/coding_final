const cards = document.querySelectorAll('.acard');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if(lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = this;
    } else {
        secondCard = this;
        if(firstCard.dataset.framework === secondCard.dataset.framework) {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            resetBoard();
        } else{
            lockBoard = true;
            setTimeout(()=>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
            }, 1000);
        }
    }
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach(card=>{
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

var element = document.body;
let img = document.getElementById("switchDay");

function daySwitch() {
    element.classList.toggle("night");
    
    if (img === "assets/moon.png") {
        img = document.getElementById("switchDay").src="assets/sun.png";
    } else {
       img = document.getElementById("switchDay").src="assets/moon.png";
   }

 }

 function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "text.txt");
    xhttp.send();
  }