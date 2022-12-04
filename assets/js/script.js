function beginQuiz() {
  var showInfo = document.getElementById("ruleBox");
  if (showInfo.style.display === "none") {
    showInfo.style.display = "block";
  } else {
    showInfo.style.display = "none";
  }
}

function quizBox() {
  starterGun();
  finalCountdown();
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
    choice1: "String",
    choice2: "Number",
    choice3: "Boolean",
    choice4: "All of the above",
    correctChoice: "4",
  },
  { question: "Variables defined with 'let' ",
    choice1: "can be redeclared unlimited times.",
    choice2: "can only be redeclared once.",
    choice3: "cannot be redeclared.",
    choice4: "can only be redeclared twice.",
    correctChoice: "3",
  },
  { question: "Which of the following are comparatives?",
    choice1: "||",
    choice2: "&",
    choice3: "&|",
    choice4: "|&",
    correctChoice: "1",
  },
  { question: "What does NaN stand for?",
    choice1: "Not a Numerator",
    choice2: "Not a Number",
    choice3: "Nothing is a Number",
    choice4: "Non of the above",
    correctChoice: "2",
  },
  { question: "Which of the following is not a coding language?",
    choice1: "CSS",
    choice2: "HTML",
    choice3: "SOS",
    choice4: "JS",
    correctChoice: "3",
  },
  { question: "Which of the following is a method used for an array?",
    choice1: ".pop()",
    choice2: ".poke()",
    choice3: ".prod()", 
    choice4: ".pour()",
    correctChoice: "1",
  },
];

// finalCountdown();

function finalCountdown() {
  let timeFrame = setInterval(() => {
    if (clock <= 60 && clock > 35) {
      countdown.style.color = "green";
    } else if (clock <= 35 && clock > 10) {
      countdown.style.color = "orange";
    } else if (clock <= 10 && clock > 0) {
      countdown.style.color = "red";
    }

    countdown.innerText = clock;
    clock -= 1;

    if (clock = 0) {
      clearInterval(timeFrame);
      alert("You have run out of time, please try again.");
      location.href = "./index.html";
    }
  }, 1000);
}

starterGun();

function starterGun() {
  let knowledge = quizQuestions[quizQuest];
  quizSentence.innerText = knowledge.question;
  answer1.textContent = knowledge.choice1;
  answer2.textContent = knowledge.choice2;
  answer3.textContent = knowledge.choice3;
  answer4.textContent = knowledge.choice4;
}



document.getElementById("answer1").addEventListener("click", function () {
    alert("hello");
});
document.getElementById("answer2").addEventListener("click", );
document.getElementById("answer3").addEventListener("click", );
document.getElementById("answer4").addEventListener("click", );



function answerKey(answer) {
  if (answer === quizQuestions[quizQuest].correctChoice) {
    quizQuest++;
    result++;

    if (quizQuest < quizQuestions.length) {
      starterGun();
    }
  } else {
    clock = parseInt(countdown.innerText);
    clock -= 10;
    countdown.innerText = clock;
  }

  if (result === 6) {
    let userScore = prompt(
      "High Fvie ✋: You scored a [' + clock + '] Write your initials below to keep score."
    );
    location.href = "./assets/js/script1.js";
  }
}
