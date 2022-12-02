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

            for(letter in questions[i].answers) {
                answers.push(
                    "<label>" + "<input type='radio' name='question"+i+"' value='"+ letter +"'>" + letter + ": " + questions[i].answers[letter] + "</label>"
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
        var userAnswers = quizBox.querySelectorAll(".answers");

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
var questions = [
    {
    question: "Which of the following are data types?",
    answers: {
    a: 'String',
    b: 'Number',
    c: 'Boolean',
    d: 'All of the above'
    },
    correctAnswer: 'd'
}, 
{
    question: "Variables can be all numbers.",
    answers: {
    a: "True.",
    b: "False.",
    },
    correctAnswer: "b"
}, 
{
    question: "Which of the following are comparatives?",
    answers: {
    a: "||",
    b: "&",
    c: "&|",
    d: "|&"
    },
    correctAnswer: "a"
}, 
{
    question: "What does NaN stand for?",
    answers: {
    a: "Not a Numerator",
    b: "Not a Number",
    c: "Nothing is a Number",
    d: "Non of the above"
    },
    correctAnswer: "b"
}, 
{
    question: "Which of the following is not a coding language?",
    answers: {
    a: "CSS",
    b: "HTML",
    c: "SOS",
    d: "JS"
    },
    correctAnswer: "c"
}, 
{
    question: "Which of the following is a method used for an array?",
    answers: {
    a: ".pop()",
    b: ".poke()",
    c: ".prod()",
    d: ".pour()"
    },
    correctAnswer: "a"
},
];


makeQuiz(questions, quizBox, scoreboard, answerButton);