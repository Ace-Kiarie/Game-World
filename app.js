const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const result = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.choice-btn');

let userChoice
let computerOption
let resultValue 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice
    computerChoice()
    getResult()
}))

const computerChoice = () =>{
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    if(randomNumber === 1){
        computerOption = "Rock"
    } else if(randomNumber === 2){
        computerOption = "Paper"
    }else{
        computerOption = "Scissors"
    }

    computerChoiceDisplay.innerHTML = computerOption
}

const getResult = () => {
    computerOption === userChoice ? resultValue = "Its a draw!" :
    computerOption === "Rock" && userChoice === "Paper" ? resultValue = "You Won!!":
    computerOption === "Paper" && userChoice === "Scissors" ? resultValue = "You Won!!":
    computerOption === "Scissors" && userChoice === "Rock" ? resultValue = "You Won!!":
    computerOption === "Rock" && userChoice === "Scissors" ? resultValue = "You Lost!!":
    computerOption === "Paper" && userChoice === "Rock" ? resultValue = "You Lost!!":
    computerOption === "Scissors" && userChoice === "Paper" ? resultValue = "You Lost!!": resultValue = "Play Again!!"

    result.innerHTML = resultValue
};