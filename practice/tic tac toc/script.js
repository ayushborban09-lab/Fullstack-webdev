let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new_game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#winner");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "black"
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "black"
            turnO = true;
        }

        box.disabled = true;
        checkWinner();
    });
});


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner ", pos1);
                disableBoxes();
            }
        }
    }
};


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};


const resetGame = () => {
    turnO = true;
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
};

resetBtn.addEventListener("click", resetGame);

