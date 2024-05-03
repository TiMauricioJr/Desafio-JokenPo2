const result = document.querySelector(".resultHTML")

const playerOne = document.querySelector('#one')
const playerTwo = document.querySelector('#two')

const startItUp = document.querySelector(".start-wrapper")


let scorePlayerOne = 0
let scorePlayerTwo = 0

let chances = 0

const playHuman = (humanChoice) =>{
    
    letsPlay(humanChoice, playIA())

}

const playIA = () =>{
    const iaOptions = ['rock', 'paper', 'scissor']
    iaChoice = Math.floor(Math.random() * 3)

    return iaOptions[iaChoice]
}

const letsPlay = (human, ia) => {
    console.log('Humano: ' + human + ' ' + 'IA: ' + ia)

    if (human === ia) {
        result.innerHTML = "DREW!!"
    }else if(human === 'paper' && ia === 'rock' || 
            human === 'rock' && ia === 'scissor' || 
            human === 'scissor' && ia == 'paper') {
        scorePlayerOne++
        playerOne.innerHTML = scorePlayerOne        
        result.innerHTML = "YOU WIN!!"
        
    }else{
        scorePlayerTwo++
        playerTwo.innerHTML = scorePlayerTwo
        result.innerHTML = "YOU LOSE!!"

    }

    if (scorePlayerOne === 3) {
        window.location.replace("http://127.0.0.1:5500/youwin.html")
    } else if(scorePlayerTwo === 3){
        chances++
        window.location.replace("http://127.0.0.1:5500/youlose.html")

    }
}    

function startTheGame() {
    startItUp.style.display = "none"
}
// condição para game over

// function gameOver() {
//     gameOver.style.display = "none"
//     if (chances === 1 ) {
//         window.location.replace("http://127.0.0.1:5500/gameover.html")

//     }
    
// }

