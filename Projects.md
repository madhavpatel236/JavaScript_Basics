## Projects-1 Color Changer
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Changer</title>
    <link rel="stylesheet" href="first.css">
</head>
<body>
    <div class="containor">
        <h1 class="heading">Color Changer</h1>
        <span class="boxes" id="red"></span>
        <span class="boxes" id="black"></span>
        <span class="boxes" id="blue"></span>
        <span class="boxes" id="green"></span>
        <h3 class="footer">Try clicking on one of the colors above to change the background color of this page!</h3>
    </div>
</body>
<script src="first.js"></script>
</html>
```
```css
*{
    padding: 0px;
    margin: 0px;
    /* background-color: #212121; */  /*this is wrong from that line color will not change in the full page because that makes a page color static */
    color: white;
}
span {
    display: block;
}
.containor{
    margin: 100px auto ; /* top & bottom = 100px , left & right = auto means center  */
    width: 80%;
    text-align: center;
}
.boxes{
    width: 100px;
    height: 100px;
    border: 2px solid black;
    display: inline-block;
    
}
#red{
    background-color: red;
}
#black{
    background-color: black;
}
#blue{
    background-color: blue;
}
#green{
    background-color: green;
}

```
``` javascript

const buttons = document.querySelectorAll('.boxes');
const body = document.querySelector('body');

buttons.forEach( function(val){
    // console.log(val)

    val.addEventListener('click' , function(e){
        // console.log(e);   // wrong
        // console.log(e.target);   // right way to target any things
        
        if(e.target.id === 'red'){ 
            body.style.backgroundColor = e.target.id;  
        }
        else if(e.target.id === 'black'){ 
            body.style.backgroundColor = e.target.id;  
        }
        else if(e.target.id === 'blue'){ 
            body.style.backgroundColor = e.target.id;  
        }
        else if(e.target.id === 'green'){ 
            body.style.backgroundColor = e.target.id;  
        }
    } )
} );
``` 

## Project-2 BMI Generator

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="second.css">
</head>
<body>
    <div class="containor">
        <form class="form">
        <h1> BMI Calculator</h1> <br>
        <p> <label for="Height">Height in CM : </label> <input type="text" id="Height"></p> <br>
        <p> <label for="Weight">Weight in KG : </label> <input type="text" id="Weight"></p> <br>
        <button class="calc" > Calculate </button> <br>
        <div id="result"></div> <br>
        <h3> <b> BMI Weight Guide</b> </h3> <br>
        <span> Under Weight = less then 18.6 <br> <br>
                Normal Range = 18.6 to 24.9 <br> <br>
                over weight = Greater then 24.9</span>
    </div>
        </form>
    
</body>
<script src="second.js"></script>
</html>
```

```css
*{
    margin: 0px;
    padding: 0px;
}
.containor{
    /* margin: 0px auto 0px; */
    height: 645px;
    width: 100%;
    background-color: #212121;
    color: #ffff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.calc{
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: 2px solid black ;
    border-radius: 10px;
}
```

```javascript
const form = document.querySelector('form');

// const weight = parseInt(document.querySelector('#Weight').value); // this value give you empty because at the time of refrece the page value was zero.

form.addEventListener('submit' , function(e){
    e.preventDefault(); // at the time of relode the page value was zero so from that function zero value will not be submit at each relode.

    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);

    const result = document.querySelector('#result')

    if (height === '' || height === 0 || isNaN(height)) {
        result.innerHTML = `please give the correct value ${height}`;
    }
    else if (weight === '' || weight === 0 || isNaN(weight)) {
        result.innerHTML = `please give the correct value ${weight}`;
    } else {
        result.innerHTML = (weight / ((height * height)/10000)).toFixed(2)
    }
})
```

## Project-3 Number Gussing game

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Gussing Game</title>
    <link rel="stylesheet" href="forth.css">
</head>
<body>
    <div class="containor">
        <h3>Try and guess a random number between 1 and 100. <br>
        You have 10 attempts to guess the right number</h3>
        <form class="form">
            <label for="guessField"><h1>Guess a Number</h1></label>
            <input type="text" id="guessField" class="guessField"></label> <br> <br>
            <input type="submit" id="submit" value="Submit Guess" class="guessSubmit"></label>
        </form>

        <div class="resultParas">
            <p >Previous Guesses : <span class="PreviousGuess"></span> </p>
            <p >Guesses Remaining : <span class="RemainingGuess"></span> </p>
            <p class="LowOrHi"></p>
        </div>
    </div>
</body>
<script src="forth.js"></script>
</html>
```

```css
body{
    color: #fff;
    background-color: #212121;
}
.containor{
    text-align: center;
    margin: 100px auto;
}
```

```javascript
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
```

## Project-4 Ultimated Color
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Chanding</title>
</head>

<body>
    <div>
        <h1> Color Changing Project</h1>
        <button class="Start">Start</button>
        <button class="Stop">Stop</button>
    </div>
    <Script>

        let randomColor = function () {
            let hax = "0123456789ABCDEF"
            let color = "#"

            for (i = 0; i < 6; i++) {
                color += hax[Math.floor(Math.random() * 16)]
            }
            return color;
        }

        let setIntervalID;
        const StartChanging = function () {
            setIntervalID = setInterval(Changing, 1000)
            function Changing() {
                document.body.style.backgroundColor = randomColor();
            }
        }

        const StopChanging = function () {
            clearInterval(setIntervalID)
            // setInterval= null
        }

        document.querySelector(".Start").addEventListener('click', StartChanging)
        document.querySelector(".Stop").addEventListener('click', StopChanging)


    </Script>
</body>

</html>
```