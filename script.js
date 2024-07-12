let userScore = 0;
let computerScore = 0;

const getUserChoice = () => {
    const val = prompt('Choose, rock paper or scissors?');
    return val;
}

const getComputerChoice = () => {
    const choices = ['rock','paper','scissors'];
    let randomNumber = Math.floor(Math.random()*choices.length);
    return choices[randomNumber];
}

const playRound = (u, c) => {
    if(u === c) {
        console.log("No one wins, play again.");
    }
    else if(u == 'rock' && c == 'scissors') {
        console.log('YOU WIN, rock beats scissors!');
        userScore++;
    }
    else if(u == 'rock' && c == 'paper') {
        console.log('YOU LOSE, paper beats rock!');
        computerScore++;
    }
    else if(u == 'paper' && c == 'scissors') {
        console.log('YOU LOSE, scissors beat paper!');
        computerScore++;
    }
    else if(u == 'paper' && c == 'rock') {
        console.log('YOU WIN, paper beats rock!');
        userScore++;
    }
    else if(u == 'scissors' && c == 'rock') {
        console.log('YOU LOSE, rock beats scissors');
        computerScore++;
    }
    else if(u == 'scissors' && c == 'paper') {
        console.log('YOU WIN, scissors beat paper');
        userScore++;
    }
    else {
        console.log('Invalid choice, try again!')
    }
}

const playGame = () => {
    console.log("-------- Start Game -------");
    for(let i=1; i<=5; i++) {
        console.log(`ROUND ${i}/5`);
        const user = getUserChoice();
        const computer = getComputerChoice();
        playRound(user.toLowerCase(), computer.toLowerCase());
        console.log(`User - ${userScore}  Computer - ${computerScore}`);
    }
    if(userScore > computerScore) {
        console.log('FINAL RESULT : You are the winner!!!')
    }
    else {
        console.log('FINAL RESULT : Computer wins');
    }
}

playGame();