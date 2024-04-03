function getComputerChoice(){
    let result = Math.floor(Math.random() * 3);
    
    switch(result){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return `It was a tie! You both chose ${computerSelection}`
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Rock lost to paper."
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beat scissors."
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beat rock."
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Paper lost to scissors."
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Scissors lost to rock."
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beat paper."
    }
}
