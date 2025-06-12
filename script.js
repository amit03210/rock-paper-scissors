//PLAN
// We'll need 3 global variable humanScore, computerScore and roundLevel
// Wil make use of 3 function:
// getComputerChoice(): will return choice of computer in 'string' format.
// getHumanChoice(): will return choice of human in 'string' format.
// playRound(humanChoice, computerChoice): take argument as getHumanChoice() and getComputerChoice() this function
// will decide who win and increase the score variable accordingly.
// will play for 5 rounds and whoever has highest scores will win the game.

//PSEUDOCODE;
//Initialize variables
// integer humanScore = 0
// integer computerScore = 0
// integer roundCounter = 0

// Function to get Computer Choice:
    //function getComputerChoice():
        // Generate a Random choice (Rock, Paper, Scissors)
        // Return a String.

// Function to get Human Choice:
    //function getHumanChoice():
        // prompt human for input for (Rock, Paper, Scissors)
        // check for case sensitivity
        // Validate input (loop until valid input is received) 
        // return the string

// Function to update Scores:
    //function playRound(getHumanChoice, getComputerChoice):
        // string humanChoice = getHumanChoice()
        // string computerChoice = getComputerChoice()
        // compare both input to see if human or computer is winner.
        // If human is winner:
            //humanScore += 1;
            //roundCounter += 1;
            // Display "Human won round __ and his score is __"
        // If computer is winner:
            //computerScore +=1;
            //roundCounter += 1
            // Display "Computer won round __ and his score is __"
        // if both have same
            // Display "this round is tie, therefore round will not be counted"

// start game:
    // integer humanScore = 0
    // integer computerScore = 0
    // integer roundCounter = 0

    // Loop (while roundCounter <= 5):
        // playRound(choiceH, choiceC)
    
    // Display overall Score of Human and Computer
    // Declare winner



