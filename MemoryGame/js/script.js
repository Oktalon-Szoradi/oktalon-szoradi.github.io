function makeCards(size){
    let numbers = [];
    for (let i = 1; i <= size*size/2; i++){
        numbers.push(i);
        numbers.push(i);
    }
    
    for (let i = 0; i < size; i++){
        let container = document.createElement("div");
        container.className = "container";
        for(let j = 0; j < size; j++){
            let card = document.createElement("div");
            card.className = "card";
            let m = Math.floor(Math.random() * numbers.length);
            card.innerHTML = numbers[m];
            numbers.splice(m, 1);
            container.appendChild(card);
            card.addEventListener("click", turnCard);
        }
        wrapper.appendChild(container);
    }


};

document.getElementById("lvl1").addEventListener("click", () => {
    document.getElementById("wrapper").innerHTML = "";
    makeCards(2);
});

document.getElementById("lvl2").addEventListener("click", () => {
    document.getElementById("wrapper").innerHTML = "";
    makeCards(4);
});

document.getElementById("lvl3").addEventListener("click", () => {
    document.getElementById("wrapper").innerHTML = "";
    makeCards(6);
});

function turnCard() {
    window.alert("hey")
};