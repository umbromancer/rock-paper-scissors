function getComputerChoice() {
    let moves = ['rock', 'paper', 'scissors'];
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

    if (playerSelection === 'rock'     && computerSelection === 'paper' ||	
        playerSelection === 'scissors' && computerSelection === 'rock' ||
        playerSelection === 'paper'    && computerSelection === 'scissors')
	return `You Loose! ${computerSelection} beats ${playerSelection}`;
    else
	return `Draw! ${playerSelection} vs. ${computerSelection}`;
}

function getPlayerChoice() {
    let moves = ['rock', 'paper', 'scissors'];
    let choice = '';
    while (true) {
	choice = prompt(`Your play is 'rock', 'paper' or 'scissors'?
('Cancel' to quit the game)`);
	if (Object.is(choice, null))
	    break;
	if (moves.includes(choice.toLowerCase()))
	    break;
	else
	    alert(`You must enter one of the three options!
Or press cancel to abandon the game.`);
    }
    return choice;
    
}

function game() {
    let computerSelection;
    let playerSelection;
    for (let turn = 1; turn <= 5; turn++) {    
	playerSelection = getPlayerChoice();
	if (!playerSelection)
	    break;
	computerSelection = getComputerChoice();
	console.log(playRound(playerSelection, computerSelection));
    }
}

