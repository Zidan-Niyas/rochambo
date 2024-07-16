let userScore = 0;
let computerScore = 0;
const res = document.querySelector("#results");
const result = document.createElement("p");
const player = document.querySelector("#userScore");
const computer = document.querySelector("#computerScore");
const winner = document.createElement("p");
const resetButton = document.createElement("button");
winner.classList.add("winner");
player.textContent = userScore;
computer.textContent = computerScore;


const getComputerChoice = () => {
    const choices = ['rock','paper','scissors'];
    let randomNumber = Math.floor(Math.random()*choices.length);
    return choices[randomNumber];
}

const updateUserScore = () => {
    userScore++;
    player.textContent = userScore;
}

const updateComputerScore = () => {
    computerScore++;
    computer.textContent = computerScore;
}

const playRound = (u, c) => {
    if(u === c) {
        result.textContent = "No one wins, play again.";
    }
    else if(u == 'rock' && c == 'scissors') {
        result.textContent = 'YOU WIN, rock beats scissors!';
        updateUserScore();
    }
    else if(u == 'rock' && c == 'paper') {
        result.textContent = 'YOU LOSE, paper beats rock!';
        updateComputerScore();
    }
    else if(u == 'paper' && c == 'scissors') {
        result.textContent = 'YOU LOSE, scissors beat paper!';
        updateComputerScore();
    }
    else if(u == 'paper' && c == 'rock') {
        result.textContent = 'YOU WIN, paper beats rock!';
        updateUserScore();
    }
    else if(u == 'scissors' && c == 'rock') {
        result.textContent = 'YOU LOSE, rock beats scissors';
        updateComputerScore();
    }
    else if(u == 'scissors' && c == 'paper') {
        result.textContent = 'YOU WIN, scissors beat paper';
        updateUserScore();
    }
    else {
        alert('Invalid choice, try again!');
    }
    res.appendChild(result);
}

const reset = () => {
    resetButton.textContent = "Play Again";
    resetButton.classList.add("reset");
    res.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    player.textContent = userScore;
    computer.textContent = computerScore;
    res.removeChild(winner);
    res.removeChild(resetButton);
}

const checkGame = () => {
    if(userScore == 5) {
        winner.textContent = "YOU ARE THE WINNER !!!";
        result.textContent = '';
        res.appendChild(winner);
        reset();
    }
    else if(computerScore == 5) {
        winner.textContent = "COMPUTER WINS";
        result.textContent = '';
        res.appendChild(winner);
        reset();
    }
    
}
 
const btn = document.querySelectorAll("button");
btn.forEach((item) => {
    item.addEventListener("click", (event) => {
        const choice = event.target.id;
        console.log(choice);
        let playerSelection = '';
        switch(choice) {
            case 'rock':
                playerSelection = "rock";
                console.log(`Player selected ${playerSelection}`);
                break;
            case 'paper':
                playerSelection = "paper";
                console.log(`Player selected ${playerSelection}`);
                break;
            case 'scissors':
                playerSelection = "scissors";
                console.log(`Player selected ${playerSelection}`);
                break;
            default :
                alert("error");
                break;
        }
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        checkGame();
    });
});
