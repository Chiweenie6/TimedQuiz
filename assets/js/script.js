// Connects to the HTML
var quizBox = document.getElementById("questions");
var answerButton = document.getElementById("answer");
var scoreboard = document.getElementById("score");


makeQuiz(questions, quizBox, scoreboard, answerButton);


// Creates the quiz
function makeQuiz(questions, quizBox, scoreboard, answerButton) {
    
// Shows the questions and answers
    function questionsAppear(questions, quizBox) {
        var info =[];
        var answers;

        for(var i = 0; i < questions.length; i++) {
            answers = [];

            for(number in questions[i].answers) {
                answers.push(
                    "<label>" + "<input type='radio' name='question"+i+"' value='"+ number +"'>" + number + ": " + questions[i].answers[number] + "</label>"
                );
            }

            info.push(
                "<section class ='question'>" + questions[i].question + "</section>" + "<section class ='answers'>" + answers.join("") + "</section>"
            );
        }

        quizBox.innerHTML = info.join("");

    }

    questionsAppear(questions, quizBox);

// Shows the user's answers
    function finalScore(questions, quizBox, scoreboard) {
        var userAnswers = quizBox.querySelectorAll("answers");

        var userChoice = "";
        var correctAmount = 0;

        for(var i = 0; i < questions.length; i++) {
            userChoice = (userAnswers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userChoice === questions[i].correctAnswer) {
                correctAmount++;

                userAnswers[i].style.color = "green";
            } else {
                userAnswers[i].style.color = "orange";
            }
        }

        scoreboard.innerHTML = correctAmount + " of " + questions.length;

    }


    questionsAppear(questions, quizBox);

    answerButton.onclick = function() {
        finalScore(questions, quizBox, scoreboard);
    }

}


// Quiz questions
var jsquestions = [
    {
    question: "Which of the following are data types?",
    answers: {
    1: "String",
    2: "Number",
    3: "Boolean",
    4: "All of the above"
    },
    correctAnswer: '4'
},
{
    question: "Variables can be all numbers.",
    answers: {
    1: "True.",
    2: "False.",
    },
    correctAnswer: "2"
},
{
    question: "Which of the following are comparatives?",
    answers: {
    1: "||",
    2: "&",
    3: "&|",
    4: "|&"
    },
    correctAnswer: "1"
},
{
    question: "What does NaN stand for?",
    answers: {
    1: "Not a Numerator",
    2: "Not a Number",
    3: "Nothing is a Number",
    4: "Non of the above"
    },
    correctAnswer: "2"
},
{
    question: "Which of the following is not a coding language?",
    answers: {
    1: "CSS",
    2: "HTML",
    3: "SOS",
    4: "JS"
    },
    correctAnswer: "3"
},
{
    question: "Which of the following is a method used for an array?",
    answers: {
    1: ".pop()",
    2: ".poke()",
    3: ".prod()",
    4: ".pour()"
    },
    correctAnswer: "1"
},
];


makeQuiz(questions, quizBox, scoreboard, answerButton);