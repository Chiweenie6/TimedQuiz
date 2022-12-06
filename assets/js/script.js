const beginButton = document.getElementById("beginButton");
const quizBox = document.getElementById("quizBox");
const quizQuestion = document.getElementById("quizQuestion");
const quizAnswers = document.getElementById("quizAnswers");
const nextButton = document.getElementById("nextButton");


beginButton.addEventListener("click", beginQuiz);

let questionNumber, questionMix;


function beginQuiz() {
    beginButton.classList.add("disappear");
    quizBox.classList.remove("disappear");
    questionNumber = 0;
    questionMix = questionList.sort(() => Math.floor(Math.random() * questionList.length + 1));
    cycleQuestions();

}

function cycleQuestions() {
    squareOne();
    displayQuestion(questionMix[questionNumber]);
}

function displayQuestion(question){
    quizQuestion.innerText = question.question;
    question.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.answer;
        button.classList.add("btn");
        if (choice.right) {
            button.dataset.right = choice.right;
        }
        button.addEventListener("click", checkAnswer);
        quizAnswers.appendChild(button);
    })

}

function squareOne()  {
    declareAnswer(document.body);
    nextButton.classList.add("disappear");
    while (quizAnswers.firstChild) {
        quizAnswers.removeChild(quizAnswers.firstChild);
    }

}

function checkAnswer(e) {
    const clickedButton = e.target;
    const right = clickedButton.dataset.right;
    declareAnswer(document.body, right);
    Array.from(quizAnswers.children).forEach(button => {
        declareAnswer(button, button.dataset.right)
    })
    if (questionMix.length > questionNumber +1) {
    nextButton.classList.remove("disappear");
    } else {
        beginButton.innerText = "beginAgain";
        beginButton.classList.remove("disappear");
    }
}

function declareAnswer(element, right) {
    eraseAnswer(element)
    if (right) {
        element.classList.add("right")
    } else {
        element.classList.add("wrong")
    }
}

function eraseAnswer(element) {
    element.classList.remove("right");
    element.classList.remove("wrong");

}

nextButton.addEventListener("click", () => {
    questionNumber++;
    cycleQuestions();

})



let questionList = [
    { question: "Which of the following are data types?",
    choices: [
      {answer: "String", right: false},
      {answer: "Number", right: false},
      {answer: "Boolean", right: false},
      {answer: "All of the above", right: true}
    ]
    },
    { question: "Variables defined with 'let' ",
    choices: [
      {answer: "can be redeclared unlimited times.", right: false},
      {answer: "can only be redeclared once.", right: false},
      {answer: "cannot be redeclared.", right: true},
      {answer: "can only be redeclared twice.", right: false}
    ]
    },
    { question: "Which of the following are comparatives?",
    choices: [
      {answer: "||", right: true},
      {answer: "&", right: false},
      {answer: "&|", right: false},
      {answer: "|&", right: false}
    ]
    },
    { question: "What does NaN stand for?",
    choices: [
      {answer: "Not a Numerator", right: false},
      {answer: "Not a Number", right: true},
      {answer: "Nothing is a Number", right: true},
      {answer: "None of the above", right: true}
    ]
    },
    { question: "Which of the following is not a coding language?",
    choices: [
     {answer: "CSS", right: false},
     {answer: "HTML", right: false},
     {answer: "SOS", right: true},
     {answer: "JS", right: false}
    ]
    },
    { question: "Which of the following is a method used for an array?",
    choices: [
      {answer: ".pop()", right: true},
      {answer: ".poke()", right: false},
      {answer: ".prod()", right: false}, 
      {answer: ".pour()", right: false}
    ]
    }
  ];





































// const begin = document.getElementById("begin");
// const questionBox = document.getElementById("questionBox");
// const quizWords = document.getElementById("quizWords");
// const answer1 = document.getElementById("a1");
// const answer2 = document.getElementById("a2");
// const answer3 = document.getElementById("a3");
// const answer4 = document.getElementById("a4");
// const countdown = document.getElementById("countdown");
// const timingange = document.getElementById("timingange");
// const soFar = document.getElementById("soFar");
// const trophyRoom = document.getElementById("trophyRoom");



// let quizQuestions = [
//     { question: "Which of the following are data types?",
//       answer1: "String",
//       answer2: "Number",
//       answer3: "Boolean",
//       answer4: "All of the above",
//       correctAnswer: "All of the above"
//     },
//     { question: "Variables defined with 'let' ",
//       answer1: "can be redeclared unlimited times.",
//       answer2: "can only be redeclared once.",
//       answer3: "cannot be redeclared.",
//       answer4: "can only be redeclared twice.",
//       correctAnswer: "cannot be redeclared."
//     },
//     { question: "Which of the following are comparatives?",
//       answer1: "||",
//       answer2: "&",
//       answer3: "&|",
//       answer4: "|&",
//       correctAnswer: "||"
//     },
//     { question: "What does NaN stand for?",
//       answer1: "Not a Numerator",
//       answer2: "Not a Number",
//       answer3: "Nothing is a Number",
//       answer4: "None of the above",
//       correctAnswer: "Not a Number"
//     },
//     { question: "Which of the following is not a coding language?",
//       answer1: "CSS",
//       answer2: "HTML",
//       answer3: "SOS",
//       answer4: "JS",
//       correctAnswer: "SOS"
//     },
//     { question: "Which of the following is a method used for an array?",
//       answer1: ".pop()",
//       answer2: ".poke()",
//       answer3: ".prod()", 
//       answer4: ".pour()",
//       correctAnswer: ".pop()"
//     }
//   ];





// function welcomeBox() {
//   var showInfo = document.getElementById("ruleBox");
//   if (showInfo.style.display === "none") {
//     showInfo.style.display = "block";
//   } else {
//     showInfo.style.display = "none";
//   }
// }


// const endQuest = quizQuestions.length - 1;
// let quizQuest = 0;
// let howMany = 0;
// let clock = 60;
// let timeLimit = 100;
// const timeClock = timeLimit / clock;
// let results = 0;
// let timing;


// function starterGun() {
//     let knowledge = quizQuestions[quizQuest];
//     quizWords.innerHTML = knowledge.question;
//     answer1.innerHTML = knowledge.answer1;
//     answer2.innerHTML = knowledge.answer2;
//     answer3.innerHTML = knowledge.answer3;
//     answer4.innerHTML = knowledge.answer4;
//   }

// begin.addEventListener("click", letsBegin)



// function letsBegin() {
//     begin.style.display = "none";
//     starterGun();
//     questionBox.style.display = "block";
//     userInfo();
//     timeManagment();
//     timing = setInterval(timeManagment, 1000);
// }


// function userInfo() {
//     for(let i = 0; i <= endQuest; i++) {
//         soFar.innerHTML += "<div class='userPro' id='+ i +'></div>";
//     }
// }

// function timeManagment () {
//     if(howMany <= clock) {
//         countdown.innerHTML = howMany;
//         howMany++;
//     } else {
//         howMany = 0;
//         incorrectAns();
//         if(quizQuest < endQuest) {
//             quizQuest++;
//             starterGun();
//         } else {
//             clearInterval(timing);
//             scoreCard();
//         }
//     }

// }

// function answerSheet (answer) {
//     if (answer == quizQuestions[quizQuest].correctAnswer) {
//         results++;
//         correctAns();
//     } else {
//         incorrectAns();
//     }

//     howMany = 0;
//     if(quizQuest < endQuest) {
//         quizQuest++;
//         starterGun();
//     } else {
//         clearInterval(timing);
//         scoreCard();
//     }
// }

// function correctAns () {
//     document.getElementById("quizWords").style.backgroundColor = "green";
// }

// function incorrectAns () {
//     document.getElementById("quizWords").style.backgroundColor = "red";
// }

// function scoreCard () {
//     trophyRoom.style.display = "block";
//     trophyRoom.innerHTML += "<p>" + results + ' / ' + quizQuestions.length + "</p>";

// }



// function answerSheet(answer) {
//     answer.preventDefault();
//     if (answer == quizQuestions[quizQuest].correctAnswer) {
//       quizQuest++;
//       results++;
  
//       if (quizQuest < quizQuestions.length) {
//         starterGun();
//       }
//     } else {
//       clock = parseInt(countdown.innerText);
//       clock -= 10;
//       countdown.innerText = clock;
//     }
  
    // if (results === 6) {
    //   let userScore = prompt(
    //     "High Fvie ✋: You scored a [' + clock + '] Write your initials below to keep score.");
    //   location.href = "./assets/js/script1.js";
    // }
//   }




// finalcountingDown();

// function finalcountingDown() {
//   let timeFrame = setInterval(() => {
//     if (clock <= 60 && clock > 35) {
//       countingDown.style.color = "green";
//     } else if (clock <= 35 && clock > 10) {
//       countingDown.style.color = "orange";
//     } else if (clock <= 10 && clock > 0) {
//       countingDown.style.color = "red";
//     }

//     countingDown.innerText = clock;
//     clock -= 1;

//     if (clock = 0) {
//       clearInterval(timeFrame);
//       alert("You have run out of time, please try again.");
//       location.href = "./index.html";
//     }
//   }, 1000);
// }

// starterGun();
