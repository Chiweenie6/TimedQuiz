
const begin = document.getElementById("begin");
const questionBox = document.getElementById("questionBox");
const quizWords = document.getElementById("quizWords");
const answer1 = document.getElementById("a1");
const answer2 = document.getElementById("a2");
const answer3 = document.getElementById("a3");
const answer4 = document.getElementById("a4");
const countdown = document.getElementById("countdown");
const timeRange = document.getElementById("timeRange");
const soFar = document.getElementById("soFar");
const trophyRoom = document.getElementById("trophyRoom");



let quizQuestions = [
    { question: "Which of the following are data types?",
      answer1: "String",
      answer2: "Number",
      answer3: "Boolean",
      answer4: "All of the above",
      correctAnswer: "All of the above"
    },
    { question: "Variables defined with 'let' ",
      answer1: "can be redeclared unlimited times.",
      answer2: "can only be redeclared once.",
      answer3: "cannot be redeclared.",
      answer4: "can only be redeclared twice.",
      correctAnswer: "cannot be redeclared."
    },
    { question: "Which of the following are comparatives?",
      answer1: "||",
      answer2: "&",
      answer3: "&|",
      answer4: "|&",
      correctAnswer: "||"
    },
    { question: "What does NaN stand for?",
      answer1: "Not a Numerator",
      answer2: "Not a Number",
      answer3: "Nothing is a Number",
      answer4: "None of the above",
      correctAnswer: "Not a Number"
    },
    { question: "Which of the following is not a coding language?",
      answer1: "CSS",
      answer2: "HTML",
      answer3: "SOS",
      answer4: "JS",
      correctAnswer: "SOS"
    },
    { question: "Which of the following is a method used for an array?",
      answer1: ".pop()",
      answer2: ".poke()",
      answer3: ".prod()", 
      answer4: ".pour()",
      correctAnswer: ".pop()"
    }
  ];





// function beginQuiz() {
//   var showInfo = document.getElementById("ruleBox");
//   if (showInfo.style.display === "none") {
//     showInfo.style.display = "block";
//   } else {
//     showInfo.style.display = "none";
//   }
// }

// function quizBox() {
//   starterGun();
//   finalCountdown();
// }


const endQuest = quizQuestions.length - 1;
let quizQuest = 0;
let howMany = 0;
let clock = 60;
const timeLimit = 100;
const timeClock = timeLimit / clock;
let results = 0;
let TIMER;


function starterGun() {
    let knowledge = quizQuestions[quizQuest];
    quizWords.innerHTML = knowledge.question;
    answer1.innerHTML = knowledge.answer1;
    answer2.innerHTML = knowledge.answer2;
    answer3.innerHTML = knowledge.answer3;
    answer4.innerHTML = knowledge.answer4;
  }

begin.addEventListener("click", letsBegin)



function letsBegin() {
    begin.style.display = "none";
    starterGun();
    questionBox.style.display = "block";
    userInfo();
    timeManagment();
    TIMER = setInterval(timeManagment, 1000);
}


function userInfo() {
    for(let i = 0; i <= endQuest; i++) {
        soFar.innerHTML += "<div class='userPro' id='+ i +'></div>";
    }
}

function timeManagment () {
    if(howMany <= clock) {
        countdown.innerHTML = howMany;
        timeRange.style.width = howMany * timeClock + "px";
        howMany++;
    } else {
        howMany = 0;
        incorrectAns();
        if(quizQuest < endQuest) {
            quizQuest++;
            starterGun();
        } else {
            clearInterval(TIMER);
            scoreCard();
        }
    }

}

function answerSheet (answer) {
    if (answer === quizQuestions[quizQuest].correctAnswer) {
        results++;
        correctAns();
    } else {
        incorrectAns();
    }
    howMany = 0;
    if(quizQuest < endQuest) {
        quizQuest++;
        starterGun();
    } else {
        clearInterval(TIMER);
        scoreCard();
    }
}

function correctAns () {
    document.getElementById(quizQuest).style.backgroundColor = "green";
}

function incorrectAns () {
    document.getElementById(quizQuest).style.backgroundColor = "red";
}

function scoreCard () {
    trophyRoom.style.display = "block";
    trophyRoom.innerHTML += "<p>" + results + ' / ' + quizQuestions.length + "</p>";

}




















// Quiz questions

// let countingDown = document.getElementById("quizCounter");
// let scoreboard = document.getElementById("rank");
// // let clock = 60;
// // let quizQuest = 0;
// // let result = 0;

// let quizSentence = document.getElementById("quizSentence"),
//   answer1 = document.getElementById("answer1"),
//   answer2 = document.getElementById("answer2"),
//   answer3 = document.getElementById("answer3"),
//   answer4 = document.getElementById("answer4");



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





// // function moveOn (answer) {
// //     if (answer === quizQuestions[quizQuest].correctChoice) {
// //         quizQuest++;
// //         result++;
// // }
// // }




// document.getElementById("answer1").addEventListener("click", function() {
//     alert("hello");
// });
// document.getElementById("answer2").addEventListener("click", answerKey());
// document.getElementById("answer3").addEventListener("click", answerKey());
// document.getElementById("answer4").addEventListener("click", answerKey());



// function answerKey(answer) {
//   if (answer === quizQuestions[quizQuest].correctChoice) {
//     quizQuest++;
//     result++;

//     if (quizQuest < quizQuestions.length) {
//       starterGun();
//     }
//   } else {
//     clock = parseInt(countingDown.innerText);
//     clock -= 10;
//     countingDown.innerText = clock;
//   }

//   if (result === 6) {
//     let userScore = prompt(
//       "High Fvie ✋: You scored a [' + clock + '] Write your initials below to keep score.");
//     location.href = "./assets/js/script1.js";
//   }
// }
