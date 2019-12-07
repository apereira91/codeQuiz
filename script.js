var viewScore = document.getElementById("viewscore");
var finalPage = document.getElementById("myDiv");
var counter = document.getElementById("countdown");
var startQuiz = document.getElementById("random-button");
var playerName = document.getElementById("playerName");
var finalScore = document.getElementById("finalScore");
var quizQuestionsDiv = document.getElementById("quizQuestionsDiv");
var rightOrWrong = document.getElementById("correctChoice");
var questionTitle = document.getElementById("questionTitle");
var optionBtns = document.querySelectorAll(".options");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

var questionNumber = 0;
var quizQuestions = localStorage.getItem("questions");
var secondsLeft = 75;

quizQuestions = JSON.parse(quizQuestions);
console.log(quizQuestions);

//Initial Page needs to be hidden
function hideInitialPage() {
    viewScore.setAttribute("style", "display: none");
    startQuiz.setAttribute("style", "display: none");
}

//Quiz elements needs to be hidden
function hideQuizPage() {
    counter.setAttribute("style", "display: none");
    viewScore.setAttribute("style", "display: block");
}

function showFinalPage() {
    quizQuestionsDiv.setAttribute("style", "display: none");
    finalPage.setAttribute("style", "display: block");
    finalScore.textContent = "Your final score is " + secondsLeft;
}

function displayQuizQuestions() {
    quizQuestionsDiv.setAttribute("style", "display: block");
    questionTitle.textContent = questions[questionNumber].title;
    option1.textContent = questions[questionNumber].options[0];
    option2.textContent = questions[questionNumber].options[1];
    option3.textContent = questions[questionNumber].options[2];
    option4.textContent = questions[questionNumber].options[3];
}

startQuiz.addEventListener("click", function(){

    alert("You have 75 seconds to answer 5 questions.");
    hideInitialPage();
    counter.setAttribute("style", "display: block");
    displayQuizQuestions();

    secondsLeft = 75;
    counter.textContent = "Time: " + secondsLeft;
    var timerInterval = setInterval(function() {
        secondsLeft -=1;
        counter.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("You ran out of time");
            hideQuizPage();
            showFinalPage();
        }

        else if (questionNumber === questions.length) {
            clearInterval(timerInterval);
            alert("Congratulations! You completed the quiz");
            hideQuizPage();
            showFinalPage();
        }
    }, 1000);
});

for (var i = 0; i <optionBtns.length; i++){
    optionBtns[i].addEventListener("click", function(event){
        //console.log(questions[questionNumber].answer);

        if (event.target.textContent === questions[questionNumber].answer) {
            rightOrWrong.textContent = "That's right!";
            secondsLeft = secondsLeft;
        }

        else {
            rightOrWrong.textContent = "Incorrect";
            secondsLeft = secondsLeft - 15;
        }

        questionNumber++;
        displayQuizQuestions()
    })
}
var todoInput = documnent.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todoList");
var playerCount = document.querySelector("#playerCount");
var submitScore = document.getElementById("submitScore");

var players = [];

renderPlayers();

function renderPlayers() {
    todoList.innerHTML = "";
    playerCount.textContent = players.length;

    for (var i = 0; i < players.length; i++) {
        var player = players[i];

        var li = document.createElement("li");
        li.textContent = player;
        li.setAttribute("data-index", i);

        var button = document.createElement("button")
        button.textContent = "Submit";

        li.appendChild(button);
        todoList.appendChild(li);
    }
}

init();

function init() {
    var storedPlayers = JSON.parse(localStorage.getItem("players"));

    if (storedPlayers !== null) {
        players = storedPlayers;
    }

    renderPlayers();
}

function storePlayers() {

    localStorage.setItem("players", JSON.stringify(players));
}


todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var todoText = todoInput.value.trim();

    if (todoText === "") {
        return;
    }

    players.push(todoText);
    todoInput.value = "";

    storePlayers();
    renderPlayers();
});
