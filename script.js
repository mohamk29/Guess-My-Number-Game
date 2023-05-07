'use strict';
// PROJECT #1: GUESS MY NUMBER!
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('🥴 No number!');
  }

  //When player enters negative number
  else if (guess < 0){
    displayMessage('🫣 guess must be greater than 1!');
  }

  //When player wins
  else if (guess === secretNumber) {
    displayMessage ('🥳 Correct Number!');

    //display the guessed number
    document.querySelector('.number').textContent = secretNumber;
    //apply winning css effects
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    //save the highscore
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } 

  // When guess is wrong
  else if(guess !== secretNumber){
    if(score > 1){
      displayMessage (guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score --;
      document.querySelector('.score').textContent = score;
    }
    else{
      displayMessage ('💣 You lost the game!');
      document.querySelector('.score').textContent = '0';
    }
  } 

});

//Reset the game
document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = '20';

  displayMessage('Start guessing...');

   document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = ' ';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width='15rem';
})
