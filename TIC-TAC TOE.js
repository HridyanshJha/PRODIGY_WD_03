let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msgbox");
let msg = document.querySelector("#msg");

let turnO = true;     //playerX ,player O
//using 2D arr
const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame =() => {
    turnO = true;
    enableBoxes ();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO){
            //player O  
            box.innerText = "O";
            turnO =false;
        }else{
            //player X
            box.innerText ="X";
            turnO =true;
        }
        box.disabled = true ;

        checkWinner();
    });  
});

const disableBoxes =() => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes =() => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner =(winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1Valn = boxes[pattern[0]].innerText;
        let pos2Valn = boxes[pattern[1]].innerText;
        let pos3Valn = boxes[pattern[2]].innerText;
        
        if (pos1Valn != "" && pos2Valn != "" && pos3Valn != ""){
            if(pos1Valn === pos2Valn && pos2Valn === pos3Valn){
                showWinner(pos1Valn); 
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);