const questions = [
    {
        questions:"JavaScript is a loosely typed language.",
        answers:[
            {text: "True" , correct: false},
            {text: "False" , correct: false},
            {text: " It depends on the context" , correct: false},
            {text: "JavaScript is both loosely and dynamically typed" , correct: true},

        ]
    },
    {
        questions:" The localStorage object in JavaScript has the same storage limit as the sessionStorage object.",
        answers:[
            {text: "True" , correct: true},
            {text: "False" , correct: false},
            {text: " It depends on the browser" , correct: false},
            {text: "`localStorage and sessionStorage` have unlimited storage" , correct: false},

        ]
    },
    {
        questions:" JavaScript promises are always asynchronous.",
        answers:[
            {text: "True" , correct: false},
            {text: "False" , correct: true},
            {text: " Depends on the implementation" , correct: false},
            {text: "Promises can't be used for asynchronous operations" , correct: false},

        ]
    },
    {
        questions:" The event.stopPropagation() method prevents the event from propagating up or down the DOM tree.",
        answers:[
            {text: "True" , correct: true},
            {text: "False" , correct: false},
            {text: " It only prevents propagation up the DOM tree" , correct: false},
            {text: " It only prevents propagation down the DOM tree" , correct: false},

        ]
    },
    {
        questions:" The map() function in JavaScript modifies the original array.",
        answers:[
            {text: "True" , correct: false},
            {text: "False" , correct: true},
            {text: " It depends on the implementation" , correct: false},
            {text: "The map() function creates a new array without modifying the original" , correct: false},

        ]
    },

]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    resetState();
   let currentQuestion = questions[currentQuestionIndex];
    let questionsNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionsNo + "." + currentQuestion.questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    })
}

function resetState(){
   nextButton.style.display = "none";
   while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
   } 
}

function selectAnswer(dets){
    const selectedBtn = dets.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 }

 function showScore(){

 }
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestions();
    }else{
        showScore();
    }

}
 nextButton.addEventListener("click" ,()=> {
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 })
startQuiz();