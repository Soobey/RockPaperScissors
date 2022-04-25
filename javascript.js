//returns a random (whole) number between min and max (both included)
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


//decides who wins
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
        else if (computerSelection === 'scissors') {
            return result = 'You Win!';
        }
        else {
            return result = 'ERROR';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return result = 'You Win!';
        }
        else if (computerSelection === 'paper') {
            return result = 'Draw';
        }
        else if (computerSelection === 'scissors') {
            return result = 'You Lose!';
        }
        else {
            return result = 'ERROR';
        }
    }
    else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock') {
            return result = 'You Lose!';
        }
        else if (computerSelection === 'paper') {
            return result = 'You Win!';
        }
        else if (computerSelection === 'scissors') {
            return result = 'Draw';
        }
        else {
            return result = 'ERROR';
        }    
    }
    else {
        return result = 'ERROR';
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    const end_result = document.querySelector('#end_result');
    const Result = document.querySelector('#result');

    //Displays the result from the beginning
    end_result.textContent = `Result: ${scorePlayer} : ${scoreComputer}`;

    //Listener for Rock-Button
    const btnR = document.querySelector('#rock');
    btnR.addEventListener('click', () => {
        Play('Paper', computerPlay());
        if (result === 'You Win!') {
            scorePlayer += 1;
            Result.textContent = `${result}`
        }
        else if (result === 'You Lose!') {
            scoreComputer += 1;
            Result.textContent = `${result}`
        }
        else {
            Result.textContent = `${result}`
        }

        //Displays the result
        if
        end_result.textContent = `Result: ${scorePlayer} : ${scoreComputer}`;
    });

    //Listener for Paper-Button
    const btnP = document.querySelector('#paper');
    btnP.addEventListener('click', () => {
        Play('Paper', computerPlay());
        if (result === 'You Win!') {
            scorePlayer += 1;
            Result.textContent = `${result}`
        }
        else if (result === 'You Lose!') {
            scoreComputer += 1;
            Result.textContent = `${result}`
        }
        else {
            Result.textContent = `${result}`
        }

        //Displays the result
        end_result.textContent = `Result: ${scorePlayer} : ${scoreComputer}`;
    });

    //Listener for Scissors-Button
    const btnS = document.querySelector('#scissors');
    btnS.addEventListener('click', () => {
        Play('Scissors', computerPlay());
        if (result === 'You Win!') {
            scorePlayer += 1;
            Result.textContent = `${result}`
        }
        else if (result === 'You Lose!') {
            scoreComputer += 1;
            Result.textContent = `${result}`
        }
        else {
            console.log(result);
            Result.textContent = `${result}`
        }

        //Displays the result
        end_result.textContent = `Result: ${scorePlayer} : ${scoreComputer}`;
    });

    const btnRe = document.querySelector('#reset');
    btnRe.addEventListener('click', () => {
        scoreComputer = 0;
        scorePlayer = 0;
        Result.textContent = `RESET`

        //Displays the result (0:0)
        end_result.textContent = `Result: ${scorePlayer} : ${scoreComputer}`;
    });
}

game()