let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const newBtn = document.querySelector("#new")

const genCompChoice = () =>{
    const option = ["rock","paper","scissor"]
    const randomIdx = Math.floor(Math.random()*3);
    return option[randomIdx];
}

let drawGame = () =>{
    console.log("game was draw")
    msg.innerText = "Game Draw."
    msg.style.backgroundColor = "#BF9000"
}

const newGame = ()=>{
     userScore = 0;
     compScore = 0;
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    msg.innerText = "Play your move"
    msg.style.backgroundColor = "#081b31"
}

newBtn.addEventListener("click",newGame)




showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You WIN! : Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You LOSE! : ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("User Choice : ",userChoice)
    const compChoice =  genCompChoice();
    console.log("Computer Choice : ",compChoice)

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor"? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
       
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})


