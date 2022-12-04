


function beginQuiz () {
    var showInfo = document.getElementById("ruleBox");
    if (showInfo.style.display === "none") {
        showInfo.style.display = "block";
    } else {
        showInfo.style.display = "none";
    }
}

function quizBox() {
    document.querySelector.

}




// Quiz questions

let countdown = document.getElementById("quizCounter");
let scoreboard = document.getElementById("rank");
let clock = 60;
let quizQuest = 0;
let result = 0;

let quizSentence = document.getElementById("quizSentence"),
    answer1 = document.getElementById("answer1"),
    answer2 = document.getElementById("answer2"),
    answer3 = document.getElementById("answer3"),
    answer4 = document.getElementById("answer4");

let quizQuestions = [
    { question: "Which of the following are data types?",
    answers: {
    choice1: "String",
    choice2: "Number",
    choice3: "Boolean",
    choice4: "All of the above"
    },
    correctAnswer: "4"
    },
    { question: "Variables defined with 'let' ",
    answers: {
    choice1: "can be redeclared unlimited times.",
    choice2: "can only be redeclared once.",
    choice3: "cannot be redeclared.",
    choice4: "can only be redeclared twice."
    },
    correctAnswer: "3"
    },
    { question: "Which of the following are comparatives?",
    answers: {
    choice1: "||",
    choice2: "&",
    choice3: "&|",
    choice4: "|&"
    },
    correctAnswer: "1"
    },
    { question: "What does NaN stand for?",
    answers: {
    choice1: "Not a Numerator",
    choice2: "Not a Number",
    choice3: "Nothing is a Number",
    choice4: "Non of the above"
    },
    correctAnswer: "2"
   },
   { question: "Which of the following is not a coding language?",
    answers: {
    choice1: "CSS",
    choice2: "HTML",
    choice3: "SOS",
    choice4: "JS"
    },
    correctAnswer: "3"
   },
   { question: "Which of the following is a method used for an array?",
    answers: {
    choice1: ".pop()",
    choice2: ".poke()",
    choice3: ".prod()",
    choice4: ".pour()"
    },
    correctAnswer: "1"
}
];

finalCountdown();

function finalCountdown () {
    let timeFrame = setInterval( () => {
        if(clock <= 60 && clock > 35) {
            countdown.style.color = "green";
        } else if (clock <= 35 && clock > 10) {
            countdown.style.color = "orange";
        } else if (clock <= 10 && clock >= 0) {
            countdown.style.color = "red";
        }

        countdown.innerText = clock;
        clock -= 1;

        if (clock < 0) {
            clearInterval(timeFrame);
            alert("You have run out of time, please try again.")
            location.href = "./index.html";
        }
    }, 1000);
}

starterGun();

function starterGun () {
    let knowledge = quizQuestions[quizQuest];
    quizSentence.innerText = knowledge.question;
    answer1.textContent = knowledge.choice1;
    answer2.textContent = knowledge.choice2;
    answer3.textContent = knowledge.choice3;
    answer4.textContent = knowledge.choice4;
}

function theTruth(answer) {
    if (answer === quizQuestions[quizQuest].correctAnswer) {
        quizQuest ++;
        result ++;

        if (quizQuest < quizQuestions.length) {
            starterGun();
        }
    } else {
        clock = parseInt(countdown.innerText);
        clock -= 10;
        countdown.innerText = clock;
    }

    if (result === 6) {
        let userScore = prompt("High Fvie ✋: You scored a [' + clock + '] Write your initials below to keep score.")
        location.href = "./assets/js/script1.js";
    }
}