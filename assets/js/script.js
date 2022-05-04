var timerEl = document.querySelector('#timer');
var questionArea = document.querySelector('#question-area');
var score = 0;
var scoreEl = document.getElementById('score');
let questionIndex;
var questions = document.getElementById('questions');
var questionsArray = [
    {
    question: 'Inside which HTML element does JavaScript go?',
    choice1 : '<script>',
    choice2 : '<p>',
    choice3 : '<scripting>',
    choice4 : '<header>',
    answer: '<script>',
},

{
    question: 'How do you write "Hello World" in an alert box?',
    choice1:'msg("Hello World!")',
    choice2:'alertBox("Hello World!")', 
    choice3:'alert("Hello World!")',
    choice4: 'console.log("Hello World!")',
    answer: 'alert("Hello World!")'
},
{
    question: 'How do you create a function in JavaScript',
    choice1: 'function:myFunction()',
    choice2:'function myFunction()', 
    choice3:'function= myFunction()',
    answer:'function myFunction()'
},
{
    question: 'How to write an IF statement in JavaScript?',
    choice1:'if (i == 5)',
    choice2: 'if i = 5 then', 
    choice3:'if i == 5 then', 
    choice4:'if i = 5',
    answer:'if (i == 5)'
},
{
    question: 'How do you round the number 7.25, to the nearest integer?',
    choice1:'Math.round(7.25)',
    choice2:'round(7.25)', 
    choice3:'Math.rnd(7.25)', 
    choice4:'rnd(7.25)',
    answer:'Math.round(7.25)'
},
{
    question: 'How do you declare a JavaScript variable?',
    choice1: 'variable carName;', 
    choice2:'v carName;',
    choice3: 'var carName;',
    choice4: 'v: carName',
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
    //loop that displays each question

    for(let i = 0; i< questionsArray.length; i++) {

    //populate question template
    questionArea.innerHTML = '';
    var questionText = document.createElement('h2');
        questionText.innerText = questionsArray[i].question;

    var choiceBtn1 = document.createElement('button');
        choiceBtn1.className = 'choice1 btn btn-primary';
        choiceBtn1.setAttribute =  ('id', 'choice-btn-1');
        choiceBtn1.innerText = questionsArray[i].choice1;
    var choiceBtn2 = document.createElement('button');
        choiceBtn2.className = 'choice2 btn btn-primary';
        choiceBtn2.setAttribute =  ('id', 'choice-btn-2');
        choiceBtn2.innerText = questionsArray[i].choice2;
    var choiceBtn3 = document.createElement('button');
        choiceBtn3.className = 'choice3 btn btn-primary';
        choiceBtn3.setAttribute =  ('id', 'choice-btn-3');
        choiceBtn3.innerHTML = questionsArray[i].choice3;
    var choiceBtn4 = document.createElement('button');
        choiceBtn4.className = 'choice4 btn btn-primary';
        choiceBtn4.setAttribute =  ('id', 'choice-btn-4');
        choiceBtn4.innerHTML = questionsArray[i].choice4;

    questionArea.appendChild(questionText);  
    questionArea.appendChild(choiceBtn1);  
    questionArea.appendChild(choiceBtn2);  
    questionArea.appendChild(choiceBtn3);  
    questionArea.appendChild(choiceBtn4);   
    
   

        // if(){};
    };
     

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
