let playerSelection = undefined
let computerSelection =  ['rock', 'paper', 'scissors']

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const playButton = document.getElementById("playbutton")
const computerImage = document.getElementById("imagetab")

rock.addEventListener("click", () => {
    rock.style.borderColor = "mediumaquamarine"
    paper.style.borderColor = "black"
    scissors.style.borderColor = "black"
    playerSelection = 'rock'
})

paper.addEventListener("click", () => {
    paper.style.borderColor = "mediumaquamarine"
    rock.style.borderColor = "black"
    scissors.style.borderColor = "black"
    playerSelection = 'paper'
})

scissors.addEventListener("click", () => {
    scissors.style.borderColor = "mediumaquamarine"
    paper.style.borderColor = "black"
    rock.style.borderColor = "black"
    playerSelection = 'scissors'
})


function play(player, computer) {
    if (player == computer) {
        return 'draw'
    }
    if ((player == 'rock' && computer == 'scissors') || (player == 'scissors' && computer == 'paper') || 
    (player == 'paper' && computer == 'rock')) {
        return 'win'
    }
    if ((player == 'rock' && computer == 'paper') || (player == 'scissors' && computer == 'rock') ||
    (player == 'paper' && computer == 'scissors')) {
        return 'loss'
    }
    else {
        return 'error'
    }
}

function randomIndex(range) {
    return Math.floor(Math.random() * range)
}

playButton.addEventListener("click", () => {
    computerImage.innerHTML = ""
    computer = String(computerSelection[randomIndex(3)])
    result = play(playerSelection, computer)
    setTimeout(() => {
        if (result == 'draw') {
            computerImage.innerHTML = "Draw Try Again"
        } 
        if (result == 'win') {
            computerImage.innerHTML = "Well Done! you beat the computer"
        }
        if (result == 'loss') {
            computerImage.innerHTML = "The computer wins."
        }
        if (result == 'error') {
            computerImage.innerHTML = "There is an error"
        }
    }, 2000)
    console.log(playerSelection)
    console.log(computer)    
})
