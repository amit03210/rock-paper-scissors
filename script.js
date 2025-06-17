//PLAN
// We'll need 3 global variable humanScore, computerScore and roundLevel
// Wil make use of 3 function:
// getcomputerIn(): will return choice of computer in 'string' format.
// getHumanChoice(): will return choice of human in 'string' format.
// playRound(humanChoice, computerIn): take argument as getHumanChoice() and getcomputerIn() this function
// will decide who win and increase the score variable accordingly.
// will play for 5 rounds and whoever has highest scores will win the game.

let divButton  = document.createElement('div');
let rockButton = document.createElement('button');
let paperButton = document.createElement('button');
let scissorButton  = document.createElement('button');
let heading = document.querySelector('.heading');
let body = document.querySelector('body');
let resultPara = document.querySelector('.result');
let textPara = document.createTextNode("");
let scoreSelect = document.querySelector('.score');
let choiceSelect = document.querySelector('.choice');

// resultPara.textContent = "Hello"

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorButton.textContent = "Scissor";
body.appendChild(divButton);
divButton.appendChild(rockButton);
divButton.appendChild(paperButton);
divButton.appendChild(scissorButton);
body.appendChild(resultPara);
resultPara.appendChild(textPara);

rockButton.setAttribute('class', 'rockC');
paperButton.setAttribute('class', 'paperC');
scissorButton.setAttribute('class', 'scissorC');

// let rock = document.querySelector('.rockC');
// let paper = document.querySelector('.paperC');
// let scissor = document.querySelector('.scissorC');


let humanScore = 0;
let computerScore = 0;
let roundLevel = 0;

function getcomputerChoice(){
    rand = (Math.floor(Math.random() * 100)) % 3;
    
    let compChoice = rand == 0 ? "rock": rand == 1 ? "paper": "scissor"; 
    return compChoice;
}

function getHumanChoice(eventObj) {
    let input;
    switch(eventObj.target.className) {
        case 'rockC': input = 'rock';
        break;
        case 'paperC': input = 'paper';
        break;
        case 'scissorC': input = 'scissor';
        break;
    }
    return input;
}

function playRound(humanIn, computerIn){
    let outputScore = '';
    let outputChoice = '';

    resultPara.textContent = "";

    let humanWinCondition = (humanIn == 'paper' && computerIn == 'rock' 
                            || humanIn == 'rock' && computerIn == 'scissor'
                            || humanIn == 'scissor' && computerIn == 'paper');
    let computerWinCondition = (humanIn == 'paper' && computerIn == 'scissor' 
                            || humanIn == 'rock' && computerIn == 'paper'
                            || humanIn == 'scissor' && computerIn == 'rock');
    let tieCondition = (humanIn == computerIn);
    
    if(humanWinCondition && humanScore < 5 && computerScore < 5){
        humanScore += 1;
        
    } else if (computerWinCondition && computerScore < 5 && computerScore < 5){
        computerScore += 1;
        choiceSelect.textContent = outputChoice;
    } else
    resultPara.textContent = `this round is tie, try again ${humanIn}`
    
    outputScore = `Human Score:${humanScore} and Computer Score: ${computerScore}`
    outputChoice = `Prem Choose :${humanIn} and Computer Score: ${computerIn}`
    scoreSelect.textContent = outputScore;
    // choiceSelect.textContent = outputChoice;

}


    
divButton.addEventListener('click', (e) => {
    // return playRound()
    let humanChoice = getHumanChoice(e);
    let computerChoice = getcomputerChoice();

    playRound(humanChoice, computerChoice);

    if(humanScore == 5)
        resultPara.textContent = "Human Won";
    else if (computerScore == 5)
        resultPara.textContent = "Computer Won";
});
