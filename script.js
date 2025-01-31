const getComputerChoice = ()=>{
    let index = Math.floor(Math.random() * 3) 
    let options = ['scissors', 'paper', 'rock']
    return options[index]
   
}



const getHumanChoice = () =>{
    let choice = prompt('Rock, Paper or Scissors?', 'Rock')
    let options = ['scissors', 'paper', 'rock']
    if (!options.includes(choice.toLowerCase())) {
        return("please enter a valid choice")

    }
    else {return choice.toLowerCase()}
}







const playGame = () =>{
    let computerScore = 0;
    let humanScore = 0;
    
    const playRound = (humanChoice, computerChoice) => {
        if( humanChoice === computerChoice){
            console.log(`Tie! two ${humanChoice}s`)
    
        }
    
        else if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'scissors' && computerChoice === 'paper')||
        (humanChoice === 'paper' && computerChoice === 'rock')) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore += 1
    
        }
    
        else{
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore += 1
        }
    
        
    
        
    }
    for (let i=0; i<5; i++){
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        playRound(humanChoice, computerChoice)
        console.log(`Your score:${humanScore} , Computer's score:${computerScore}`)
        if (humanScore > computerScore){
            console.log('You won the game')
        }
        else if (humanScore < computerScore){
            console.log('You lost the game')
        }
        else {
            console.log('Tie')
        }
    }
    

}

playGame()