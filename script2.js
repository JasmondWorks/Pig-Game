'use strict';

// let player1SectionEl = document.querySelector('.player--0');
// let score1El = player1SectionEl.querySelector('.score');
// let currentScore1El = player1SectionEl.querySelector('.current-score');
// let player2SectionEl = document.querySelector('.player--1');
// let score2El = player2SectionEl.querySelector('.score');
// let currentScore2El = player2SectionEl.querySelector('.current-score');
// let rollDiceBtn = document.querySelector('.btn--roll');
// let holdBtn = document.querySelector('.btn--hold');
// let newBtn = document.querySelector('.btn--new');
// let diceEl = document.querySelector('.dice');
// let targetEl = document.querySelector('.target');
// let activePlayerEl = document.querySelector('.player--active');
// let playersEl = document.querySelectorAll('.player');
// let scores = [0, 0],
//   currentScores = [0, 0];
// let randNum;

// //   Event listeners
// rollDiceBtn.addEventListener('click', function () {
//   randNum = Math.trunc(Math.random() * 6) + 1;
//   let activePlayerIndex = getActivePlayerIndex();

//   diceEl.src = `dice-${randNum}.png`;

//   //   Increment current score

//   if (randNum == 1) {
//     clearScores(activePlayerIndex);
//     switchPlayer();
//   } else {
//     let activePlayerIndex = getActivePlayerIndex();
//     updateCurrentScore(randNum);
//   }
// });

// holdBtn.addEventListener('click', holdScore);

// function switchPlayer() {
//   let activeClass = 'player--active';
//   let activePlayerIndex = getActivePlayerIndex();

//   if (activePlayerIndex == 0) {
//     playersEl[0].classList.remove(activeClass);
//     playersEl[1].classList.add(activeClass);
//   } else {
//     playersEl[1].classList.remove(activeClass);
//     playersEl[0].classList.add(activeClass);
//   }
// }

// function clearScores(activePlayerIndex) {
//   activePlayerEl = document.querySelector('.player--active');
//   currentScores[activePlayerIndex] = 0;
//   scores[activePlayerIndex] = 0;
//   // activePlayerEl.querySelector('.score').textContent = 0;
//   // activePlayerEl.querySelector('.current-score').textContent = 0;

//   displayActiveScores(activePlayerIndex);
// }

// function clearScore(activePlayerIndex) {}

// function displayActiveScores(activePlayerIndex) {
//   playersEl[activePlayerIndex].querySelector('.score').textContent =
//     scores[activePlayerIndex];
//   playersEl[activePlayerIndex].querySelector('.current-score').textContent =
//     currentScores[activePlayerIndex];
// }

// // function displayActiveScore(activePlayerIndex) {

// // }
// function keepScore(activePlayerIndex) {
//   scores[activePlayerIndex] = currentScores[activePlayerIndex];
// }
// function updateCurrentScore(diceNum) {
//   let activePlayerIndex = getActivePlayerIndex();
//   let activePlayerEl = playersEl[activePlayerIndex];
//   currentScores[activePlayerIndex] += diceNum;
//   activePlayerEl.querySelector('.current-score').textContent =
//     currentScores[activePlayerIndex];

//   return currentScores[activePlayerIndex];
// }

// function getScores(activePlayerIndex) {
//   return [currentScores[activePlayerIndex], scores[activePlayerIndex]];
// }

// function getActivePlayerIndex() {
//   let activePlayerIndex;

//   for (let player of playersEl.entries()) {
//     if (player[1].classList.contains('player--active'))
//       activePlayerIndex = player[0];
//   }

//   return activePlayerIndex;
// }

// function holdScore(currentScores, scores) {
//   let activePlayerIndex = getActivePlayerIndex();
//   let scoreEl = playersEl[activePlayerIndex].querySelector('.score');
//   let currentScoreEl =
//     playersEl[activePlayerIndex].querySelector('.current-score');

//   let currentScore = getScores(activePlayerIndex)[0];
//   let score = getScores(activePlayerIndex)[0];

//   score += updateCurrentScore(randNum);

//   scoreEl.textContent = score;
//   currentScores[activePlayerIndex] = 0;
//   currentScoreEl.textContent = 0;

//   // Switch player
//   displayActiveScores(activePlayerIndex);
//   switchPlayer();
// }

// let scores = [];
// let currentScores = [];
// let players = document.querySelectorAll('.player');
// let scoresEls = document.querySelectorAll('.score');
// console.log(scoresEls);

// document.addEventListener('DOMContentLoaded', function () {
//   scores = [0, 0];
//   for (let score in scoresEls.entries()) console.log(score);
// });

/*
const getElement = identifier => document.querySelector(identifier);
const rollBtn = getElement('.btn--roll');
let currentScore = 0;
let playerNumber = 0;
const playerTotalScores = [0, 0];
const diceEl = getElement('.dice');

function rollDice() {
  let randNum = Math.trunc(Math.random() * 6) + 1;

  diceEl.src = `dice-${randNum}.png`;
  countScore(randNum);
}

rollBtn.addEventListener('click', rollDice);

// I want to connect the diceNumber to the selected player

function countScore(randNum) {
  const currentPlayerEl = getElement(`#current--${playerNumber}`);

  if (playerTotalScores[playerNumber] > 12) {
    console.log('You win!!');
  } else if (randNum === 1) {
    currentScore = 0;
    switchPlayer();
  } else {
    currentScore += randNum;
  }

  currentPlayerEl.textContent = currentScore;
}

function switchPlayer() {
  playerTotalScores[playerNumber] += currentScore;
  getElement(`#current--${playerNumber}`).textContent = 0;
  getElement(`#score--${playerNumber}`).textContent =
    playerTotalScores[playerNumber];

  if (playerTotalScores[playerNumber] > 12) {
    diceEl.classList.add('hidden');
    getElement(`.player--${playerNumber}`).classList.add('player--winner');
  } else {
    playerNumber = playerNumber === 0 ? 1 : 0;
    const playersEl = document.querySelectorAll('.player');

    for (let player of playersEl) player.classList.toggle('player--active');
  }

  currentScore = 0;
}

getElement('.btn--hold').addEventListener('click', switchPlayer);
*/

// Global declarations
let isPlaying,
  targetScore,
  playerNumber = 0,
  currentScore,
  scores;
const targetBlock = document.querySelector('.target');

// Functions
const getElement = id => document.querySelector(id);
const dice = getElement('.dice');

init();

function init() {
  // ==========
  //  Resets
  // ==========
  currentScore = 0;
  scores = [0, 0];
  isPlaying = false;
  dice.classList.add('hidden');

  // Reset current scores and scores to 0 in the DOM
  getElement('#current--0').textContent = 0;
  getElement('#current--1').textContent = 0;
  const scoresEls = document.querySelectorAll('.score');
  for (let scoreEl of scoresEls) scoreEl.textContent = 0;

  // Hide the target display and display the input field
  getElement('.target-control').style.display = '';
  getElement('.target-info').style.display = 'none';

  getElement(`#name--${playerNumber}`).textContent = `Player ${
    playerNumber + 1
  }`;

  // ==========
  // Remove the winner class and make player 1 active and player 2 inactive
  // ==========

  const players = document.querySelectorAll('.player');

  for (let player of players) player.classList.remove('player--winner');
  getElement('.player--0').classList.add('player--active');
  getElement('.player--1').classList.remove('player--active');

  playerNumber = 0;
}
function acceptTarget(e) {
  e.preventDefault();
  const targetControl = targetBlock.querySelector('.target-control');
  targetScore = Number(targetBlock.querySelector('#targetScore').value);

  if (targetScore && targetScore >= 15) {
    isPlaying = true;
    targetControl.style.display = 'none';
    getElement('#target-number').textContent = targetScore;
    getElement('.target-info').style.display = 'block';
  } else {
    let messageEl = targetBlock.querySelector('label');
    let message = messageEl.textContent;
    messageEl.textContent = 'Kindly enter a number >= 15';
    setTimeout(() => (messageEl.textContent = message), 3000);
  }
}

function rollDice() {
  if (isPlaying) {
    let randNum = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `dice-${randNum}.png`;
    if (randNum === 1) {
      currentScore = 0;
      getElement(`#current--${playerNumber}`).textContent = currentScore;

      switchPlayer();
    } else countScore(randNum);
  }
}

function countScore(randNum) {
  currentScore += randNum;

  getElement(`#current--${playerNumber}`).textContent = currentScore;
}

function switchPlayer() {
  // Add current score to total score

  if (isPlaying) {
    scores[playerNumber] += currentScore;
    getElement(`#score--${playerNumber}`).textContent = scores[playerNumber];

    if (scores[playerNumber] >= targetScore) {
      getElement('.dice').classList.add('hidden');
      getElement(`#name--${playerNumber}`).textContent += ' wins!';
      getElement(`.player--${playerNumber}`).classList.remove('player--active');
      getElement(`.player--${playerNumber}`).classList.add('player--winner');

      isPlaying = false;
    } else {
      // Clear current score
      currentScore = 0;
      getElement(`#current--${playerNumber}`).textContent = 0;

      playerNumber = playerNumber === 0 ? 1 : 0;

      // Switch and indicate the active player
      const players = document.querySelectorAll('.player');

      for (let player of players) player.classList.toggle('player--active');
    }
  }
}

// Event listeners
getElement('.btn--roll').addEventListener('click', rollDice);
getElement('.btn--hold').addEventListener('click', switchPlayer);
getElement('.target').addEventListener('submit', acceptTarget);
getElement('.btn--new').addEventListener('click', init);
