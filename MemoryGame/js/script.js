// Variables
let gameField = document.querySelector("#gameField");
let cardsHidden = [];
let cardsOpened = [];
let cardsMatched = [];

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
    cardsHidden = Array.from(document.getElementsByClassName("card"))
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
            //card.addEventListener("click", turnCard);
        }
        // Add the containers with cards in them to the game field
        gameField.appendChild(container);
    }
}

// function makeCards(size){
//     let numbers = [];
//     for (let i = 1; i <= size*size/2; i++){
//         numbers.push(i);
//         numbers.push(i);
//     }
    
//     for (let i = 0; i < size; i++){
//         let container = document.createElement("div");
//         container.className = "container";
//         for(let j = 0; j < size; j++){
//             let card = document.createElement("div");
//             card.className = "card";
//             let m = Math.floor(Math.random() * numbers.length);
//             card.innerHTML = numbers[m];
//             numbers.splice(m, 1);
//             container.appendChild(card);
//             card.addEventListener("click", turnCard);
//         }
//         gameField.appendChild(container);
//     }
// }

// let cards, openedCards, cardsAsArray;



// function turnCard() {
//     if (openedCards.length == 1 && openedCards[0] == this) {
//         openedCards = [];
//         this.style.background = "blue";
//         return;
//     }

//     if (openedCards.length < 2) {
//         openedCards.push(this);
//         this.style.background = "#7777FF";
        
//         if (openedCards.length == 2) {
//             if (openedCards[0].innerHTML === openedCards[1].innerHTML) {
//                 setTimeout(() => {
//                     cardsAsArray.forEach(element => {
//                         if (element.innerHTML === this.innerHTML) {
//                             element.style.background = "green";
//                             element.removeEventListener("click", turnCard);
//                         }
//                     });
//                 }, 500);

//                 setTimeout(() => {
//                     for (let i = 0; i < cardsAsArray.length; i++) {
//                         if (cardsAsArray[i].innerHTML == this.innerHTML) {
//                             cardsAsArray.splice(i, 1);
//                             i--;
//                         }
//                     }
//                 }, 500);

//                 setTimeout(() => {
//                     if (cardsAsArray.length == 0) {
//                         window.alert("You win!");
//                     }
//                 }, 1000);
                
//                 openedCards = [];
//             }
//             else {
//                 setTimeout(() => {
//                     for (let i = 0; i < cardsAsArray.length; i++) {
//                         if (cardsAsArray[i] == openedCards[0]) {
//                             cardsAsArray[i].style.background = "blue";
//                         }
//                     }
//                     this.style.background = "blue";
//                 }, 500);

//                 setTimeout(() => {
//                     openedCards = []
//                 }, 501);   
//             }   
//         }
//     }
// }
