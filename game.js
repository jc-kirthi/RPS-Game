let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const mag=document.querySelector("#msg");
const uscore=document.querySelector("#user-score");
const cscore=document.querySelector("#comp-score");

//computer's random choice generation
const gencomp=()=> {
        const options = ["Rock", "Paper", "Scissors"];
        //rock,paper,scissors
        const radidx = Math.floor(Math.random() * 3); // floor cuts decimal no. to get whole no from range 0-3

        // Math.random()*10; to get whole num from range 0-9
        return options[radidx];
}

//draw condition
const draw=()=>{
    console.log("game was draw");
    msg.innerText="Game was a DRAW. Play again.";
    msg.style.backgroundColor="blue"
}


//displaying the result
const showin=(userwin, userchoice,compchoice)=>{
if(userwin)
    {
        userscore++;
        uscore.innerText= userscore;
        console.log("You WIN!");
        msg.innerText=`You WIN! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++; //value update
        cscore.innerText= compscore;
        console.log("You lose!");
        msg.innerText=`You LOSE. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

//checking the condition
const playg=(userchoice)=>{
console.log("user choice =",userchoice);
//generate comp choice == modular
const compchoice=gencomp();

console.log("comp choice=",compchoice);

if(userchoice=== compchoice){
    //draw 
    draw();
}
else{
    let userwin=true;
    if(userchoice==="Rock"){
        //scissors,paper
        userwin=compchoice=== "Paper" ? false : true;
    }
    else if(userchoice==="Paper"){
        //rock,scissors
        userwin=compchoice==="Scissors" ? false : true;
    } else{
        //rock,paper
        userwin=compchoice==="Rock" ? false : true;
    }
    showin(userwin, userchoice,compchoice);
}
}

//fetching the userchoice
choices.forEach((choice)=>{ //to get all divs
    console.log(choice);
    choice.addEventListener("click", ()=>{
const userchoice=choice.getAttribute("id");// to access id
        playg(userchoice);
    })
});