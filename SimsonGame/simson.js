let gameSeq = []
let userSeq = []
let btns = ["green","red","blue","yellow"]

let started = false;
let level = 0;

let h2 = document.querySelector('h2');
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is started")
        started = true; 

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx]
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)
    gameFlash(randBtn);
}



function cheakAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
       if(gameSeq.length == userSeq.length){
        setTimeout(levelUp,1000)
       }
    }
    else{
        
        
        h2.innerHTML = `Game over! <br> <b>YOUR SCORE : ${level}</b>  <br> Press any key to start. `
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white ";
        },200)
        reset();
        
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id")
    userSeq.push(userColor);
    console.log(userSeq)

    cheakAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll('.btn')
for (btn of allbtn){
    btn.addEventListener("click",btnPress)
}


function reset(){
    newHigScr = level;
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
