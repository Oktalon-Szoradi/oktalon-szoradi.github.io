// Variables
let gameField = document.querySelector("#gameField");
let cardsHidden = [];
let cardsOpened = [];
let cardsMatched = [];
let cardContents = [];

// Button Implementations:
document.getElementById("lvl1").addEventListener("click", () => {
    InitializeGameField(2);
    
});

document.getElementById("lvl2").addEventListener("click", () => {
    InitializeGameField(4);
    
});

document.getElementById("lvl3").addEventListener("click", () => {
    InitializeGameField(6);
    
});

// Methods
function InitializeGameField(cardsAmount) {
    gameField.innerHTML = "";
    InitializeCards(cardsAmount);
    cardsHidden = Array.from(document.getElementsByClassName("card"));
}


function InitializeCards(cardsAmount) {
    // Make the container that contains the cards
    for (let i = 0; i < cardsAmount; i++){
        let container = document.createElement("div");
        container.className = "container";
        // Make cards and put them into the container
        for(let j = 0; j < cardsAmount; j++){
            let card = document.createElement("div");
            card.className = "card";
            container.appendChild(card);
            card.addEventListener("click", TurnCard);
        }
        // Add the containers with cards in them to the game field
        gameField.appendChild(container);
    }
    // There's a problem here:
    GenerateRandomCardContents(cardsAmount);
    DisperseRandomObjects();
}

function GenerateRandomCardContents(cardsAmount) {
    cardContents = [];
    for (let i = 1; i <= cardsAmount*cardsAmount/2; i++){
        cardContents.push(i);
        cardContents.push(i);
    }
    cardContents = Shuffle(cardContents);
}


// From https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function Shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


// There might be a problem here
function DisperseRandomObjects() {
    if (cardsHidden.length != cardContents.length) {
        console.log("The amount of cards on the game field does not mach up with the amount of random objects that are to be dispersed to the cards.")
        console.log(`cardsHidden: ${cardsHidden}`);
        console.log(`cardContents: ${cardContents}`);
    }
    for (let i = 0; i < cardsHidden.length.length; i++) {
        cardsHidden[i].innerHTML = cardContents[i];
        cardContents.splice(i, 1);
    }
}

function TurnCard() {
    if (cardsOpened >= 2)
    return;
    
    if (cardsOpened.length == 1 && cardsOpened[0] == this) {
        cardsOpened = [];
        this.style.background = "blue";
        return;
    }
    
    cardsOpened.push(this);
    this.style.background = "#7777FF";
    console.log(cardsOpened)

    // Finish writing this
}

// To Do

//    Done - Add an event listener, listening for "click", to each card
// Problem - Add random objects to the content (innerHTML) of each card
//         - Implement comparison checks: