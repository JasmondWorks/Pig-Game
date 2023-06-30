# Pig Game

This is a risk-management game which consists of two players and a dice that they take turns to roll



![Screenshot (803)](C:\Users\Jasmond\Pictures\Screenshots\Screenshot (803).png)



## Interface

* Consists of two sections split to the left and right, with one for each player.
* Each player has current score and total score displays
* In the middle of the two players' sections are the new game, spin and hold buttons respectively, and an input field for the target score. Note that the game will not start unless a target score is entered

## Rules

* After a target score is entered, the game begins
* When the game has begun, player 1 is usually active first, and player 2, inactive
* For any of the players, for each spin of the dice, the number gotten on the dice is added to the current score (which always starts from 0)
* The catch to the previous point. When a player gets a '1', the current score rolls back to 0, and the other player becomes active. This is where the 'hold' button comes in handy. 
* A player can choose to either hold (preserve) the current score, or try getting a higher score with the risk of losing it all. So when the active player presses on the 'hold' button, it saves the current score and adds it to the total score, and then, makes the other player active
* Finally, when a player gets to the target score or exceeds it, he/she can press on the hold button to win; the win which will be indicated
* When the new game button is pressed on, everything resets to default

### Defaults

* Hidden dice
* Score and current score of 0 for both players
* Visible input field for the target score

### Events that switch the active player to the other

1. Getting a '1', therefore losing the current score
2. Clicking on the 'hold' button and preserving the score







