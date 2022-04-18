var timerEl = document.querySelector('#timer');
var questionArea = document.querySelector('#question-area');
var startBtn = document.querySelector('#btn');

function startQuiz() {

    questionArea.innerHTML = "<h"
};


//timer function
function startTimer() {
    var timeRemaining = 75;
    var TimerCountdown = setInterval(function () {
        timeRemaining--;
        if(timeRemaining <= 0) {
            clearInterval(startTimer);
          document.getElementById('timer').innerHTML = 'Timer:' + timeRemaining;  
        }
        else {
            document.getElementById('timer').innerHTML = 'Timer' + timeRemaining;
        }
    }, 1000);

};

startQuiz();






startBtn.addEventListener("click", function() {
   alert('clicked');
});


beginQuiz();