function randNum(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function computerPlay() {
    let choice = randNum(1, 3)
    if (choice === 1) {
        return 'Rock';
    }
    else if (choice === 2) {
        return 'Paper';
    }
    else if (choice === 3) {
        return 'Scissors';
    }
    else {
        return error = 'Something went wrong';
    }
}

function Play(PlayerSelection, ComputerSelection) {
    let playerSelection = PlayerSelection.toLowerCase();
    let computerSelection = ComputerSelection.toLowerCase();

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return result = 'Draw';
        }
        else if (computerSelection === 'paper') {
            return result = 'You Lose! Paper beats Rock';
        }
        else {
            return result = 'You Win! Rock beats Scissors';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return result = 'You Win! Paper beats Rock';
        }
        else if (computerSelection === 'paper') {
            return result = 'Draw';
        }
        else {
            return result = 'You Lose! Scissors beat Paper';
        }
    }
    else {
        if (computerSelection === 'rock') {
            return result = 'You Lose! Rock beats Scissors';
        }
        else if (computerSelection === 'paper') {
            return result = 'You Win! Scissors beats Paper';
        }
        else {
            return result = 'Draw';
        }        
    }
}

console.log(Play('Paper', 'Rock'))