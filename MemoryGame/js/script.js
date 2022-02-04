function makeBoxes(size){
    let numbers = [];
    for (let i = 1; i <= size*size/2; i++){
        numbers.push(i);
        numbers.push(i);
    }
    
    for (let i = 0; i < size; i++){
        let box = document.createElement("div");
        box.className = "box";
        for(let j = 0; j < size; j++){
            let mem = document.createElement("div");
            mem.className = "mem";
            let m = Math.floor(Math.random() * numbers.length);
            mem.innerHTML = numbers[m];
            numbers.splice(m, 1);
            box.appendChild(mem);
        }
        wrapper.appendChild(box);
    }


};

document.getElementById("lvl1").addEventListener("click", () => {
    document.getElementById("wrapper").innerHTML = "";
    makeBoxes(2);
});

document.getElementById("lvl2").addEventListener("click", () => {
    document.getElementById("wrapper").innerHTML = "";
    makeBoxes(4);
});

document.getElementById("lvl3").addEventListener("click", () => {
    document.getElementById("wrapper").innerHTML = "";
    makeBoxes(6);
});


// let memBoxes = document.getElementsByClassName("mem");

// for (let i = 0; i < memBoxes.length; i++){
//     memBoxes[i].addEventListener("click", () => {
//         window.alert("Hey!");
//     });
//     console.log("m")
// };

