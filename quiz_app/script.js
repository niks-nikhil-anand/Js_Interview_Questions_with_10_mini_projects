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

const questionButton = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

