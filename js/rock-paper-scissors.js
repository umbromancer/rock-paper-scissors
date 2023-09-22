function getComputerChoice() {
    let moves = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);
    return moves[choice];
}
