
let again = null;
do {
console.log("---- Start Game ----");
const user = prompt('Choose, rock paper or scissors?');
const choices = ['rock','paper','scissors'];
let randomNumber = Math.floor(Math.random()*choices.length);
const computer = choices[randomNumber];
console.log(`User chose "${user}" & Computer chose "${computer}"`);

const check = (u, c) => {
    if(u === c) {
        console.log("No one wins, play again.");
    }
    else if(u == 'rock' && c == 'scissors') {
        console.log('USER WINS!');
    }
    else if(u == 'rock' && c == 'paper') {
        console.log('COMPUTER WINS!');
    }
    else if(u == 'paper' && c == 'scissors') {
        console.log('COMPUTER WINS!');
    }
    else if(u == 'paper' && c == 'rock') {
        console.log('USER WINS!');
    }
    else if(u == 'scissors' && c == 'rock') {
        console.log('COMPUTER WINS!');
    }
    else if(u == 'scissors' && c == 'paper') {
        console.log('USER WINS!');
    }
    else {
        console.log('Invalid choice, try again!')
    }
}

check(user, computer);

again = prompt('Do you want to play again (y or n) ?');

} while(again == 'y');