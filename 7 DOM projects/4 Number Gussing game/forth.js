let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField')
const submitGuess = document.querySelector('#submit')
const resultParas = document.querySelector('.resultParas')
const PreviousGuess  = document.querySelector('.PreviousGuess')
const RemainingGuess  = document.querySelector('.RemainingGuess')
const LowOrHi  = document.querySelector('.LowOrHi')

const p = document.createElement('p')

let PrevGuess = []
let RemaininChance = 1
let playGame = true ;



if (playGame) {
    submitGuess.addEventListener('click' , function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // Here we validate the entered value is number and in the given range or not
    if(isNaN(guess)){
        alert(`please give a valid input `)
    }
    else if(guess < 1){
        alert(`please give a value greater than one `)
    }
    else if(guess > 100){
        alert(`please give a value less than hundred `)
    }
    else if(guess < 1){
        alert(`please give a value greater than one `)
    }
    else{
        PrevGuess.push(guess)
        if (RemaininChance == 10) {
            displayguess(guess);
            displayMessage(`the correct number was ${randomNumber}`)
            endGame()
        } else {
            displayguess(guess);
            Checkguess(guess);
        }
    }
}

function Checkguess(guess){
    // Here we check the entered value is correct or not in short entered number will match with random number or not
    if (guess === randomNumber) {
        displayMessage(`congrats, You guess right`)
    } else if (guess < randomNumber ) {
        displayMessage(`You guess too Low Number `)
    } else if (guess > randomNumber ) {
        displayMessage(`You guess too High Number `)
    }
    
}

function displayguess(guess){
    // here we update previous guesses and guesses remaining section
    // we can also say this section as a cleaning section because we can empty the input field for the new guess and we can change the prevGuess and remainigGuess.
    userInput.value = ''
    PreviousGuess.innerHTML += `${guess}   `
    RemaininChance ++
    RemainingGuess.innerHTML = `${11-RemaininChance}`
}

function displayMessage(message){
    // Here we diplay the message that gussing is correct or wrong
    LowOrHi.innerHTML = `<h2> ${message} </h2>`
}

function endGame(){
    // here we end the game  
    userInput.value = ''
    userInput.setAttribute('disabled' , '')  // for the disable the taking input from the user
    p.classList.add('button'); // with the help of the classlist we can add or remove the classes or we can use some css property. here we add the button in the p(paragraph)
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`;
    resultParas.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
        const newGameButton = document.querySelector('#newGame');
        newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        PrevGuess = [];
        RemaininChance = 1;
        userInput.innerHTML = '';
        RemaininChance.innerHTML = `${11 - RemaininChance} `;
        userInput.removeAttribute('disabled');
        resultParas.removeChild(p);
        playGame = true;
    });
}



