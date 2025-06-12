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


let humanScore = 0;
let computerScore = 0;
let roundLevel = 0;

function getComputerChoice(){
    rand = (Math.floor(Math.random() * 100)) % 3;
    
    let compChoice = rand == 0 ? "rock": rand == 1 ? "paper": "scissor"; 
    // console.log(`Computer choice is: ${compChoice}`);
    return compChoice;
}

function getHumanChoice() {
    let userInput = "";
    console.log("Rock, Paper or Scissor?")
    userInput = prompt("Please enter your choice");
    if(userInput == null){
    return;
    } else userInput = userInput.toLowerCase();
    while(userInput != 'rock' && userInput !='paper' && userInput !='scissor'){
        if(userInput == null){
            return;
        }
        console.log("Please enter correct options: Rock, Paper and Scissor?");
        userInput = prompt("Enter your choice");
    }
    console.log(`Human choice is: ${userInput}`);
    return userInput;
}

function playRound(){
    let userChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let rockWeight = false;
    let paperWeight = false;
    let scissorWeight = false;
    let tie = false;

if(userChoice == null){
        return;
    }

    function winningLogic(choice1, choice2){
        if((choice1 == 'rock' && choice2 == 'paper') || (choice1 == 'paper' && choice2 == 'rock')){
            return paperWeight = true;
        } else if((choice1 == 'rock' && choice2 == 'scissor') || (choice1 == 'scissor' && choice2 == 'rock')){
            return rockWeight = true;
        } else if((choice1 == 'paper' && choice2 == 'scissor') || (choice1 == 'scissor' && choice2 == 'paper')){ 
            return scissorWeight = true;
        } else return tie = true;
    }

    
    winningLogic(userChoice, computerChoice);

    if (rockWeight){
        if (userChoice == 'rock'){
            humanScore +=1;
            // roundLevel += 1;
            console.log(`Human choose: ${userChoice} and Computer choose: ${computerChoice}`);
            console.log(`
                Human won round no: ${roundLevel+1} 
                Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        } else {
            computerScore +=1;
            // roundLevel += 1;
            console.log(`Human choose: ${userChoice} and Computer choose: ${computerChoice}`);
            console.log(`
                Computer won round no: ${roundLevel+1}
                Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        }
        //if not tie
        return true; 
    } else if (paperWeight){
        if (userChoice == 'paper'){
            humanScore +=1;
            //  roundLevel += 1;
            console.log(`Human choose: ${userChoice} and Computer choose: ${computerChoice}`);
            console.log(`
                Human won round no: ${roundLevel+1}
                Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        } else {
            computerScore +=1;
            // roundLevel += 1;
            console.log(`Human choose: ${userChoice} and Computer choose: ${computerChoice}`);
            console.log(`
                Computer won round no: ${roundLevel+1}
                Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        }
        //if not tie
        return true;
    } else if (scissorWeight) {
        if (userChoice == 'scissor'){
            humanScore +=1;
            // roundLevel += 1;
            console.log(`Human choose: ${userChoice} and Computer choose: ${computerChoice}`);
            console.log(`
                Human won round no: ${roundLevel+1}
                Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        } else {
            computerScore +=1;
            // roundLevel += 1;
            console.log(`Human choose: ${userChoice} and Computer choose: ${computerChoice}`);
            console.log(`
                Computer won round no: ${roundLevel+1}
                Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        }
        //if not tie
        return true;
    } else{
        console.log(`Its a tie, this round won't be counted`)
        //if tie
        return false;
    }

}

function startGame() {
    console.log("Reload the page To start the game.")
    humanScore = 0;
    computerScore = 0;
    roundLevel = 0;

    //Looping and increasing roundLevel Counter
    while(roundLevel<5){
        console.log(`Round Number: ${roundLevel+1}`);
        let gameSuccessOrNot = playRound();
        if(gameSuccessOrNot == null){
            console.log("Human chose to quit the game, Human Lost, reload to refresh");
            return;
        }
        gameSuccessOrNot? roundLevel +=1: roundLevel;
        console.log(`============================================================================
            
            `);
}

console.log(`
    Final Score
    -------------
    Human: ${humanScore}
    Computer: ${computerScore}`)

if(humanScore > computerScore){
    console.log("Human Won");
} else console.log("Computer won");

}

startGame()