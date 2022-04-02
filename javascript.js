function randNum(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function computerPlay() {
    let choice = randNum(1, 3);
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
            return result = 'You Lose!';
        }
        else {
            return result = 'You Win!';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return result = 'You Win!';
        }
        else if (computerSelection === 'paper') {
            return result = 'Draw';
        }
        else {
            return result = 'You Lose!';
        }
    }
    else {
        if (computerSelection === 'rock') {
            return result = 'You Lose!';
        }
        else if (computerSelection === 'paper') {
            return result = 'You Win!';
        }
        else {
            return result = 'Draw';
        }        
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your Choice');
        const computerSelection = computerPlay();
        if (Play(playerSelection, computerSelection) === 'You Win!') {
            scorePlayer++;
            alert(`Score: ${scorePlayer}:${scoreComputer}`)
        }
        else if (Play(playerSelection, computerSelection) === 'You Lose!') {
            scoreComputer++;
            alert(`Score: ${scorePlayer}:${scoreComputer}`)
        }
        else {
            alert('Draw')
        }
    }
    if (scorePlayer > scoreComputer) {
        alert('Player Wins!')
    }
    else {
        alert('Computer Wins!')
    }
}

game()