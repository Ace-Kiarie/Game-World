let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".results");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    resultValue = result_div.childNodes[0];
    let results 

    userChoice === "r" && computerChoice === "p" ?  results = "loose":
    userChoice === "p" && computerChoice === "s" ?  results = "loose":
    userChoice === "s" && computerChoice === "r" ?  results = "loose":
    userChoice === "r" && computerChoice === "s" ?  results = "win":
    userChoice === "p" && computerChoice === "r" ?  results = "win":
    userChoice === "s" && computerChoice === "p" ?  results = "win":
    results = "draw"

    results === "win" ? resultValue.nodeValue = "Looks like You Win!!":
    results === "loose" ? resultValue.nodeValue = "Looks like You Loose bud!!":
    resultValue.nodeValue = "Look at that, its a draw!!"
}

const scoreCounter = () =>{
    let win = userScore++
    let loose = computerScore++

    counterWin = computerScore_span.childNodes[0]; 
    counterLoose = userScore_span.childNodes[0];

    results === "win" ?  counterWin.nodeValue = win: 
    results ==="loose" ? counterLoose.nodeValue = loose : 
    userScore + 0;
}

const getComputerChoice = () =>{
    const choices = ["r", "p", "s"];

    const answer = Math.floor(Math.random() * 3);   ``

   return choices[answer]
}

const main = () =>{
    rock_div.addEventListener("click", ()=>{game("r")});
    paper_div.addEventListener("click", ()=>{game("p")});
    scissors_div.addEventListener("click", ()=>{game("s")});
}

main()

