const playerPoints = document.querySelector('.player-point')
const compPoints = document.querySelector('.comp-point')
const optionsBtn = document.querySelectorAll('.options button')
const choicesDiv = document.querySelector('.choices')
const playerChoices = document.querySelector('.player-choice')
const compChoices = document.querySelector('.comp-choice')
const resultText = document.querySelector('.result-text')
const resetGameBtn = document.querySelector('.reset-game')

let playerPoint = 0
let playerChoice = ''
let compPoint = 0
let compChoice = ''

function setGame() {
    playerPoints.innerHTML = playerPoint
    compPoints.innerHTML = compPoint
    resultText.innerHTML = 'Choose your weapon'
    resetGameBtn.classList.remove('active')
}

window.onload = setGame()

function playerSelect(event) {
    optionsBtn.forEach((button) => button.classList.remove('active'))
    playerChoice = event.target.dataset.option
    event.target.classList.add('active')
    resetGameBtn.classList.add('active')
    compSelect()
}

const availableCompChoice = ['rock', 'paper', 'scissors']

function compSelect() {
    const randomIndex = Math.floor(Math.random() * availableCompChoice.length)
    compChoice = availableCompChoice[randomIndex]
    checkResult()
}

function checkResult() {
    let winner = ''

    if (
        (playerChoice === 'rock' && compChoice === 'scissors') ||
        (playerChoice === 'paper' && compChoice === 'rock') ||
        (playerChoice === 'scissors' && compChoice === 'paper')
    ) {
        winner = 'You Won!'
        playerPoint++
        playerPoints.innerHTML = playerPoint
    } else if (playerChoice === compChoice) {
        winner = 'DRAW!'
    } else {
        winner = 'You Lost!'
        compPoint++
        compPoints.innerHTML = compPoint
    }

    choicesDiv.classList.add('active')
    playerChoices.innerHTML = playerChoice
    compChoices.innerHTML = compChoice
    resultText.innerHTML = winner
}

function resetGame() {
    choicesDiv.classList.remove('active')
    optionsBtn.forEach((button) => button.classList.remove('active'))
    playerPoint = 0
    compPoint = 0
    setGame()
}

optionsBtn.forEach((button) => button.addEventListener('click', playerSelect))

resetGameBtn.addEventListener('click', resetGame)