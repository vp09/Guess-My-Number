'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '✌ correct number';

document.querySelector('.number').textContent = 10;

document.querySelector('.score').textContent = 9;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 50;

console.log(document.querySelector('.guess').value);
*/
////**********GAME LOGIC************* ///

//DEFINING THE RANDOM NUMBER OUTSIDE THE CLICK METHOD , OTHERWISE THE NUMBER WILL BE GENERATED EVERYTIME THE BUTTON IS CLICKED AND THAT WOULD MAKE NO SENSE.

let secretNumber = Math.trunc(Math.random() * 20) + 1; // generating number between 1-20

let score = 20; //to count the number of times user is allowed to play  |no of chances

let highScore = 0;

const displayMessage = function (message) {
  //implementing DRY principle here .
  document.querySelector('.message').textContent = message;
};

const backgroundProp = function (bgColor, boxWidth) {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
};
//click event method//

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  //checking scenarios for input...
  //1 - if user clicks on button without inputting any number

  if (!guess) {
    displayMessage('🛑 No Number');

    //2 - when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    // document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('.number').style.width = '30rem';
    backgroundProp('#60b347', '30rem');
    highScore = score > highScore ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;

    //when guess is wrong
  } else if (guess !== secretNumber) {
    let messageContent = guess > secretNumber ? '👆Too High' : '👇Too low';
    if (score > 1) {
      displayMessage(messageContent);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
  //when the guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👆Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }

    //when the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

//when user clicks "Again" button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  backgroundProp('#222', '15rem');
  //   document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.number').style.width = '15rem';
});
