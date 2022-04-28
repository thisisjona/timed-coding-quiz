var timerEl = document.querySelector('#timer');
var questionArea = document.querySelector('#question-area');
var score = 0;
var questions = [{
    question: 'Inside which HTML element does JavaScript go?',
    choices: ['<script>','<p>', '<scripting>', '<header>'],
    answer: '<script>'
},

{
    question: 'How do you write "Hello World" in an alert box?',
    choices: ['msg("Hello World!")', 'alertBox("Hello World!")', 'alert("Hello World!")', 'console.log("Hello World!")'],
    answer: 'alert("Hello World!")'
},
{
    question: 'How do you create a function in JavaScript',
    choices: ['function:myFunction()','function myFunction()', 'function= myFunction()'],
    answer:'function myFunction()'
},
{
    question: 'How to write an IF statement in JavaScript?',
    choices: ['if (i == 5)','if i = 5 then', 'if i == 5 then', 'if i = 5'],
    answer:'if (i == 5)'
},
{
    question: 'How do you round the number 7.25, to the nearest integer?',
    choices: ['Math.round(7.25)','round(7.25)', 'Math.rnd(7.25)', 'rnd(7.25)'],
    answer:'Math.round(7.25)'
},
{
    question: 'How do you declare a JavaScript variable?',
    choices: ['variable carName;', 'v carName;', 'var carName;'],
    answer:'var carName;'
},

];

function startQuiz() {
    //create a start button
    var startBtn = document.createElement('button');
    startBtn.className ='btn btn-primary';
    startBtn.textContent = 'Begin Quiz!';
    startBtn.id = 'startBtnId';
    questionArea.innerHTML = '<p class="card-text">You have 75 seconds to finish this quiz! Lose 5 seconds for every wrong answer! Good Luck!</p>'
    questionArea.appendChild(startBtn);


    startBtn.addEventListener('click', questionHandler);
    startBtn.addEventListener('click', startTimer);
   
};

function questionHandler () {
    questionArea.innerHTML = '';
    questionArea.createElement
};


//timer function
function startTimer() {
    var timeRemaining = 75;
    var TimerCountdown = setInterval(function () {
        timeRemaining--;
        if(timeRemaining <= 0) {
            clearInterval(startTimer);
          document.getElementById('timer').innerHTML = "Time's Up!" ;  
        }
        else {
            document.getElementById('timer').innerHTML = 'Time Remaining: ' + timeRemaining;
        }
    }, 1000);

};


startQuiz();
console.log(questions[1].choices[2]);