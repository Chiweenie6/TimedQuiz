const beginButton = document.getElementById("beginButton");
const quizBox = document.getElementById("quizBox");
const quizQuestion = document.getElementById("quizQuestion");
const quizAnswers = document.getElementById("quizAnswers");
const nextButton = document.getElementById("nextButton");


beginButton.addEventListener("click", beginQuiz);

let questionNumber, questionMix;

// begin the quiz
function beginQuiz() {
    beginButton.classList.add("disappear");
    quizBox.classList.remove("disappear");
    questionNumber = 0;
    questionMix = questionList.sort(() => Math.floor(Math.random() * questionList.length + 1));
    cycleQuestions();
    timeRemaining();

}
// shows next question
function cycleQuestions() {
    squareOne();
    displayQuestion(questionMix[questionNumber]);
}
// Showing the questions from the quiz questions array
function displayQuestion(q){
    quizQuestion.innerText = q.question;
    q.choices.forEach(choice => {
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
// clears old answers
function squareOne()  {
    answerSheet(document.body);
    nextButton.classList.add("disappear");
    while (quizAnswers.firstChild) {
        quizAnswers.removeChild(quizAnswers.firstChild);
    }

}


// checking for correct answers
function checkAnswer(quest) {
    const clickedButton = quest.target;
    const right = clickedButton.dataset.right;
    answerSheet(document.body, right);
    Array.from(quizAnswers.children).forEach(button => {
        answerSheet(button, button.dataset.right)
    })
    if (questionMix.length > questionNumber + 1) {
    nextButton.classList.remove("disappear");
    } else {
        beginButton.innerText = "beginAgain";
        beginButton.classList.remove("disappear");
    }
}

function answerSheet(form, right) {
    eraseAnswer(form)
    if (right) {
        form.classList.add("right")
    } else {
        form.classList.add("wrong")
    }
}

function eraseAnswer(form) {
    form.classList.remove("right");
    form.classList.remove("wrong");

}

nextButton.addEventListener("click", () => {
    questionNumber++;
    cycleQuestions();

});


const clock = document.getElementById("clock");

// counting the time down
function timeRemaining() {
    let timeLeft = 60;

    var timeLength = setInterval(function() {
      clock.textContent = timeLeft;

      if(timeLeft >= 1) {
        timeLeft--;
      } else if (timeLeft === 0) {
        clearInterval(timeLength);
        alert("Time is up.");
        scoreCard();
      } else {
        scoreCard();
      }
  
    }, 1000);
  }

const tally = document.getElementById("tally");
const a1 = document.getElementById("a1");
const b1 = document.getElementById("b1");
const c1 = document.getElementById("c1");
const d1 = document.getElementById("d1");




// adding user's score
function scoreCard() {
    let userQuestion = 0;
    let userScore = 0;
    tally.innerText = userScore;
    quizQuestion.innerText = questionList[userQuestion].question;
    quizAnswers.innerText = questionList[userQuestion].choices[0,1,2,3].right;
    quizAnswers = () => {
        if(a1 = questionList[userQuestion].choices[0,1,2,3].true) {
            if(userScore < 6) {
                userScore++;

        }
    }
}
}






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
      {answer: "Nothing is a Number", right: false},
      {answer: "None of the above", right: false}
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

