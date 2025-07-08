// Variables
let gameField = document.querySelector("#gameField");
let message = document.querySelector("#message");
let cardsHidden = [];
let cardsOpened = [];
let cardsMatched = [];
let cardContents = [];
let gameWon = false;

// Button Implementations:
document.getElementById("lvl1").addEventListener("click", () => {
  InitializeGame(2);
  message.innerHTML = "Level 1";
});

document.getElementById("lvl2").addEventListener("click", () => {
  InitializeGame(4);
  message.innerHTML = "Level 2";
});

document.getElementById("lvl3").addEventListener("click", () => {
  InitializeGame(6);
  message.innerHTML = "Level 3";
});

// Methods
function ResetVariables() {
  cardsHidden = [];
  cardsOpened = [];
  cardsMatched = [];
  cardContents = [];
  gameWon = false;
}

function InitializeGame(cardsAmount) {
  ResetVariables();
  gameWon = false;
  gameField.innerHTML = "";
  InitializeCards(cardsAmount);
}

function InitializeCards(cardsAmount) {
  // Make the container that contains the cards
  for (let i = 0; i < cardsAmount; i++) {
    let container = document.createElement("div");
    container.className = "container";
    // Make cards and put them into the container
    for (let j = 0; j < cardsAmount; j++) {
      let card = document.createElement("div");
      card.className = "card";
      // card.classList.toggle("flip-animation");
      let cardContentBack = document.createElement("div");
      cardContentBack.className = "card-back";
      let cardContentFront = document.createElement("div");
      cardContentFront.className = "card-front";
      card.appendChild(cardContentBack);
      card.appendChild(cardContentFront);
      container.appendChild(card);
      card.addEventListener("click", TurnCard);
      
      card.classList.add("intro-flip");
      container.classList.add("intro-slide-up");

    }
    gameField.appendChild(container);
  }
  GenerateRandomCardContents(cardsAmount);
  cardsHidden = Array.from(document.getElementsByClassName("card"));
  DisperseRandomObjects();
}

function GenerateRandomCardContents(cardsAmount) {
  cardContents = [];
  for (let i = 1; i <= (cardsAmount * cardsAmount) / 2; i++) {
    cardContents.push(i);
    cardContents.push(i);
  }
  cardContents = Shuffle(cardContents);
}

// From https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function Shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function DisperseRandomObjects() {
  if (cardsHidden.length != cardContents.length) {
    console.log(
      "The amount of cards on the game field does not mach up with the amount of random objects that are to be dispersed to the cards."
    );
    console.log(`cardsHidden: ${cardsHidden}`);
    console.log(`cardContents: ${cardContents}`);
    return;
  }
  for (let i = 0; i < cardsHidden.length; i++) {
    cardsHidden[i].firstChild.innerHTML = cardContents[i];
  }
}

function TurnCard() {
  // if (cardsOpened.length >= 2)
  //     return;

  if (cardsOpened.length == 1 && cardsOpened[0] == this) {
    cardsOpened = [];
    this.style.background = "blue";
    // this.firstChild.className = "card-back";
    this.classList.toggle("flip-animation");
    return;
  }

  cardsOpened.push(this);
  this.style.background = "#7777FF";
  // this.firstChild.className = "card-front";
  this.classList.toggle("flip-animation");

  if (cardsOpened.length == 2) CompareCards();

  // To show message before the alert
  if (cardsHidden.length == cardsMatched.length && !gameWon)
    message.innerHTML = "You win!";
  setTimeout(() => {
    if (cardsHidden.length == cardsMatched.length && !gameWon) {
      cardsMatched = [];
      gameWon = true;
      window.alert(
        "Congratulations!\nYou have won the game.\n\nClick on one of the level buttons to start another game."
      );
    }
  }, 1000);
}

function CompareCards() {
  if (
    cardsOpened[0].firstChild.innerHTML == cardsOpened[1].firstChild.innerHTML
  ) {
    cardsHidden.forEach((element) => {
      if (element == cardsOpened[0] || element == cardsOpened[1]) {
        setTimeout(() => {
          element.style.background = "green";
        }, 250);

        element.removeEventListener("click", TurnCard);
      }
    });
    cardsMatched.push(cardsOpened[0]);
    cardsMatched.push(cardsOpened[1]);
    cardsOpened = [];
  } else {
    cardsHidden.forEach((element) => {
      if (element == cardsOpened[0] || element == cardsOpened[1]) {
        setTimeout(() => {
          element.style.background = "red";
        }, 250);

        setTimeout(() => {
          element.style.background = "blue";
          // element.firstChild.className = "card-back";
          element.classList.toggle("flip-animation");
        }, 750);
      }
    });
    cardsOpened = [];
  }
}
