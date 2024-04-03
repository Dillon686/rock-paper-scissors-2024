function getComputerChoice(){
    let result = Math.floor(Math.random() * 3);
    
    switch(result){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}
