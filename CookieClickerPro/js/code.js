document.getElementById("button").addEventListener("click", NewGame);
document.getElementById("cookie").addEventListener("click", CookieClick);
document.getElementById("help").addEventListener("click", HelpClick);
let elementScore = document.getElementById("score");
let elementHighscore = document.getElementById("highscore");
let elementTime = document.getElementById("time");
let score = 0;
let highscore = 0;
let time = 0;

let css = document.getElementById("theme");
css.setAttribute("href", "./style/dark.css")

let cssSwitch = document.getElementById("lightdark");
cssSwitch.addEventListener("click", () => {
    if (css.getAttribute("href") === "./style/light.css") {
        css.setAttribute("href", "./style/dark.css")
        cssSwitch.innerHTML = "&#9728;";
        cssSwitch.setAttribute("title", "Light Mode");
        document.getElementById("bar").style.backgroundColor = "#333333";
        elementTime.style.color = "white";
    }
    else if (css.getAttribute("href") === "./style/dark.css") {
        css.setAttribute("href", "./style/light.css")
        cssSwitch.innerHTML = "&#9789;";
        cssSwitch.setAttribute("title", "Dark Mode");
        document.getElementById("bar").style.backgroundColor = "#CCCCCC";
        elementTime.style.color = "black";
    }
});

function Stopwatch(){
    if (time == 19){
        elementTime.innerHTML = `Ready?`;
        if (css.getAttribute("href") === "./style/dark.css") {
            document.getElementById("bar").style.backgroundColor = "darkred";
        }
        else {
            document.getElementById("bar").style.backgroundColor = "red";
        }
        time--;
    }
    else if (time == 18){
        elementTime.innerHTML = `Set?`;
        if (css.getAttribute("href") === "./style/dark.css") {
            document.getElementById("bar").style.backgroundColor = "darkgoldenrod";
        }
        else {
            document.getElementById("bar").style.backgroundColor = "yellow";
        }
        time--;
    }
    else if (time == 17){
        elementTime.innerHTML = `Go!!`;
        if (css.getAttribute("href") === "./style/dark.css") {
            document.getElementById("bar").style.backgroundColor = "green";
        }
        else {
            document.getElementById("bar").style.backgroundColor = "lime";
        }
        document.getElementById("cookie").disabled = false;
        time--;
    }
    else if (time > 0){
        time--;
        if (time == 1){
            elementTime.innerHTML = `Time Remaining: ${time} second`;
        }
        else{
            elementTime.innerHTML = `Time Remaining: ${time} seconds`;
        }
        if (css.getAttribute("href") === "./style/dark.css") {
            document.getElementById("bar").style.backgroundColor = "#333333";
        }
        else {
            document.getElementById("bar").style.backgroundColor = "#CCCCCC";
        }
        if (time <= 5){
            elementTime.style.color = "red";
        }
    }
}

function NewGame(){
    document.getElementById("button").disabled = true;
    score = 0;
    elementScore.innerHTML = `Score: ${score}`;
    time = 19;
    if (css.getAttribute("href") === "./style/dark.css") {
        elementTime.style.color = "white";
    }
    else {
        elementTime.style.color = "black";
    }
    var i = setInterval(Stopwatch, 1000);
    setTimeout(function(){
        elementTime.innerHTML = "Time Up!!"
        clearInterval(i);
        if (score > highscore){
            highscore = score;
            elementHighscore.innerHTML = `High-Score: ${highscore}`
            window.alert(`Game Over!\nYou got a new High-Score!!\n\nScore: ${score}\nHigh-Score: ${highscore}`);
        }
        else{
            window.alert(`Game Over!\nTry going for a new High-Score!\n\nScore: ${score}\nHigh-Score: ${highscore}`);
        }
        document.getElementById("button").disabled = false;
        document.getElementById("cookie").disabled = true;
    }, 19010);
}

function CookieClick(){
    if (time != 0 && time < 17){
        score++;
        elementScore.innerHTML = `Score: ${score}`;
        document.getElementById("cookie").style.left = Math.random() * 1400 + "px";
        document.getElementById("cookie").style.top = Math.random() * 400 + 80 + "px";
    }
}

function HelpClick(){
window.alert("School project by: Oktalon Szoradi\n\nThe goal of this game is to click the cookie as much as you can within 15 seconds. The trick here though, is that every time you click the cookie, it moves somewhere else.\n\nClick the green \"New Game\" button to start a new game!");
}