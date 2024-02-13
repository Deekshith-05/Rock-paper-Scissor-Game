let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]
};

const drawGame=()=>{
    //console.log("game was draw");
    msg.innerText="game was draw try again";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        //console.log("You Win!!");
        msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        compScorePara.innerText=computerScore;
        //console.log("You Lose");
        msg.innerText=`You Lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log(userChoice);
    const compChoice=genCompChoice();
    console.log(compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors, paper
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //rock, paper
            userWin=compChoice==="scissors" ? false : true;
        }
        else{
            //rock,papaer
            userWin=compChoice==="rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
