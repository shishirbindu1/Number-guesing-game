const randomNumber = parseInt(Math.random()*100+1);
const submit =document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParse');
const p = document.createElement('p')


let prevGuess =[]
let numGuess =1
let playGame = true 

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validGuess(guess)
    })
}

const validGuess =(guess)=>{
    
}

const checkGuess =(guess)=>{

}

const displayGuess = (guess)=>{

}

const displayMessage = (message)=>{

}

const newGame =()=>{

}

const endGame =()=>{
    
}

const nepali = ()=>{
    console.log("this is just for practice")
}
