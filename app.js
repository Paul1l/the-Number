"use strict"
// Header
const btnAgain = document.querySelector('.again');
btnAgain.addEventListener('click', startAgain);
const answer = document.querySelector('.question');
// --------------------

// Main
    let body = document.querySelector('body');

    // Input
    const inp = document.querySelector('.number-input');
    const btnCheck = document.querySelector('.check');
    btnCheck.addEventListener('click', handleClick);
    console.log(btnCheck);
    // При нажатии на Enter происходит то же, что и кнопка Проверить
    inp.addEventListener("keypress", function keyDown(event) {
        if(event.key === 'Enter') {
            handleClick();
        }
    });
    // Score
    const questMessage = document.querySelector('.guess-message');
    let totalScore = document.querySelector('.score');
    let bestScore = document.querySelector('.highscore');
    console.log(bestScore);

// ------------------------

let secretNumber = Math.trunc(Math.random() * 20) + 1;


function displayGuessMessage (message) {
    questMessage.textContent = message;
}

let score = 20;
let highScore = 0;


function handleClick() {
    const guessingNumber = Number(inp.value);

    // Проверка на валидность(введено ли в инпут число)
    if(!guessingNumber) {
        displayGuessMessage('Введите число!!!');

        // Сравнение введенного числа и загаданного числа
    } else if (guessingNumber === secretNumber) {
        // Ты выиграл
        answer.style.width = '40rem';
        answer.textContent = secretNumber;
        displayGuessMessage('Правильно!!!');
        body.style.backgroundColor = 'rgb(9, 250, 21)';
            if(score > highScore) {
                highScore = score;
                bestScore.textContent = highScore;
            }
        // Если введенное число больше
    } else if(guessingNumber !== secretNumber) {
        if(score > 0) {
            displayGuessMessage(guessingNumber > secretNumber ? 'Слишком много!!!' : 'Слишком мало!!!');
            score--;
            totalScore.textContent = score;
        } else {
            answer.textContent = 'Game Over!';
            displayGuessMessage('Game Over!');
            totalScore.textContent = 0;
        }
        
    // } else if (guessingNumber > secretNumber) {
    //     if(score > 0) {
    //         questMessage.textContent = 'Слишком много!!!';
    //         score--;
    //         totalScore.textContent = score;
    //     } else {
    //         answer.textContent = 'Game Over!';
    //         questMessage.textContent = 'Game Over!';
    //         totalScore.textContent = 0;
    //     }
    //     // Если введенное число меньше
    // } else if (guessingNumber < secretNumber) {
    //     if(score > 0) {
    //         questMessage.textContent = 'Слишком мало!!!';
    //         score--;
    //         totalScore.textContent = score;

    //         // Вы использовали все очки
    //     } else {
    //         answer.textContent = 'Game Over!';
    //         questMessage.textContent = 'Game Over!';
    //         totalScore.textContent = 0;
    //     }
    }
}

function startAgain() {
    console.log(btnAgain);
    if(btnAgain){
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        answer.textContent = secretNumber;
        score = 20;
        answer.style.width = '25rem';
        answer.textContent = '???'
        displayGuessMessage('Начни угадывать!');
        inp.value = '';
        totalScore.textContent = score;
        // highScore.textContent = score;
        body.style.backgroundColor =  'rgb(0, 0, 0)';
    }
}





