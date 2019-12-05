var viewScore = document.getElementById("viewscore");
var counter = document.getElementById("countdown");
var startQuiz = document.getElementById("random-button");
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