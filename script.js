'use strict';

const players = document.querySelectorAll('.player');
const diceEl = document.querySelector('.dice');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let scores, currentScore, activePlayer, playing;
// Starting conditions
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.add('hidden');
  score0El.textContent =
    score1El.textContent =
    document.getElementById(`current--0`).textContent =
    document.getElementById(`current--1`).textContent =
      0;
  players.forEach(player => {
    player.classList.remove('player--winner', 'player--active');
  });
  players[0].classList.add('player--active');
};

init();

// Switching player functionality
const switchPlayer = () => {
  // Reset current score of current active player to 0
  currentScore = 0;

  // Display current score of former active player
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  // Switch player
  activePlayer = activePlayer === 0 ? 1 : 0;
  players.forEach(player => player.classList.toggle('player--active'));
};

// Roll dice functionality
btnRoll.addEventListener('click', function () {
  // Is game playing?
  if (playing) {
    const diceNum = Math.trunc(Math.random() * 6) + 1;

    // Show dice spin
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNum}.png`;

    // Check if dice number is one or not
    if (diceNum !== 1) {
      currentScore += diceNum;

      // Display current score of active player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Dice number is 1, so change active player score to 0
      scores[activePlayer] = 0;
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // Is game playing?
  if (playing) {
    scores[activePlayer] += currentScore;

    // Display score of former active player
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Display current score as 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    // Check winner
    if (scores[activePlayer] >= 20) {
      // End game
      playing = false;

      // Hide dice
      diceEl.classList.add('hidden');

      // Display winner
      players[activePlayer].classList.remove('player--active');
      players[activePlayer].classList.add('player--winner');
    } else switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  init();
});
