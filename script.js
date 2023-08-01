var startBtnEl = document.querySelector("#Start");
var gameScreenEl = document.querySelector("#gameScreen");
var introScreenEl = document.querySelector("#introScreen");
var timerCountdown = document.querySelector ("#countdown")
 
var timerCountdown = 1000;


var timer;

var h2El

var questions = ["what time is it?", "what is your score?"]


startBtnEl.addEventListener("click", function(){
    introScreenEl.style.display = "none"
    gameScreenEl.style.display = "block"
})

function startTimer() {
    timerCountdown.textContent = "time" + timerCountdown;
    timer = setInterval(function) {
        timerCountdown--;
        timerCountdown.textContent = "time" + timerCountdown;
    }
    if (timerCountdown ===0), 1000;
}

clearInterval(timer);

startSelection.classlist.add("hide")

displayQuestions() {
    startTimer()


function displayQuestions();

startTimer()}

h2El.textContent = questions();

startBtnEl.textContent = "next"

btn.addEventListener ("click", function())
questionsNumber++
displayQuestions()