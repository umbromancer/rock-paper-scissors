function getComputerChoice() {
    let moves = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);
    return moves[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === 'rock'     && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper'    && computerSelection === 'rock')
	return `You Win! ${playerSelection} beats ${computerSelection}`;

    else if (playerSelection === 'rock'     && computerSelection === 'paper' ||
             playerSelection === 'scissors' && computerSelection === 'rock' ||
             playerSelection === 'paper'    && computerSelection === 'scissors')
	return `You Loose! ${computerSelection} beats ${playerSelection}`;
    else
	return `Draw! ${playerSelection} vs. ${computerSelection}`;
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
