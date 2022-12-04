// Connects to the HTML

// var beginBtn = document.querySelector(".beginBtn button");
// var ruleBox = document.querySelector("#ruleBox");
// var stopBtn = ruleBox.querySelector(".buttons .stop");
// var btnNext = ruleBox.querySelector(".buttons .continue");
// var quizContainer = document.querySelector(".quizContainer");
// var scoreboard = document.querySelector(".scoreboard");
// var options = document.querySelector(".options");
// var clock = document.querySelector("header .clock");
// var timeInfo = document.querySelector(".timer .timeRemaining");
// var countDown = document.querySelector(".timer .tseconds");


function beginQuiz () {
    var showInfo = document.getElementById("ruleBox");
    if (showInfo.style.display === "none") {
        showInfo.style.display = "block";
    } else {
        showInfo.style.display = "none";
    }
}







































// var quizBox = document.getElementById("questions");
// var answerButton = document.getElementById("answer");
// var scoreboard = document.getElementById("score");


// makeQuiz(questions, quizBox, scoreboard, answerButton);


// // Creates the quiz
// function makeQuiz(questions, quizBox, scoreboard, answerButton) {
    
// // Shows the questions and answers
//     function questionsAppear(questions, quizBox) {
//         var info =[];
//         var answers;

//         for(var i = 0; i < questions.length; i++) {
//             answers = [];

//             for(number in questions[i].answers) {
//                 answers.push(
//                     "<label>" + "<input type='radio' name='question"+i+"' value='"+ number +"'>" + number + ": " + questions[i].answers[number] + "</label>"
//                 );
//             }

//             info.push(
//                 "<section class ='question'>" + questions[i].question + "</section>" + "<section class ='answers'>" + answers.join("") + "</section>"
//             );
//         }

//         quizBox.innerHTML = info.join("");

//     }

//     questionsAppear(questions, quizBox);

// // Shows the user's answers
//     function finalScore(questions, quizBox, scoreboard) {
//         var userAnswers = quizBox.querySelectorAll("answers");

//         var userChoice = "";
//         var correctAmount = 0;

//         for(var i = 0; i < questions.length; i++) {
//             userChoice = (userAnswers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

//             if(userChoice === questions[i].correctAnswer) {
//                 correctAmount++;

//                 userAnswers[i].style.color = "green";
//             } else {
//                 userAnswers[i].style.color = "orange";
//             }
//         }

//         scoreboard.innerHTML = correctAmount + " of " + questions.length;

//     }


//     questionsAppear(questions, quizBox);

//     answerButton.onclick = function() {
//         finalScore(questions, quizBox, scoreboard);
//     }

// }





// makeQuiz(questions, quizBox, scoreboard, answerButton);