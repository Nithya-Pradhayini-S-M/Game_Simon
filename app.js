let gameseq=[];
let userseq=[];
let btns = ["yellow","red","purple","green"]

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function () {
    if (started == false) {
        console.log("Game is Started");
        started=true;


        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash"); /*here we are adding the class flash*/
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userflash(btn){
    btn.classList.add("userflash"); /*here we are adding the class userflash*/
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}

function levelup(){
    userseq=[];
    level++;
    h3.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor =btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    gameFlash(randombtn); 
}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
       if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
       }
    }else{
        h3.innerHTML = `Game Over!Your Score was<b> ${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}
function btnPress(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".div");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}