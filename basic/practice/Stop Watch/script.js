// let main = document.querySelector("main")
// let stop = document.querySelector("#stop")
// let start = document.querySelector("#start")
// let restart = document.querySelector("#restart")


let spans = document.querySelectorAll(".time span");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let restartBtn = document.querySelector("#restart");

let hr = 0;
let min = 0;
let sec = 0;
let timer = null;

// Update UI
function updateTime() {
    spans[0].textContent = hr < 10 ? "0" + hr : hr;
    spans[1].textContent = min < 10 ? "0" + min : min;
    spans[2].textContent = sec < 10 ? "0" + sec : sec;
}

// Start
startBtn.addEventListener("click", function () {
    if (timer !== null) {
        clearInterval(timer);
    }

    timer = setInterval(function () {
        sec++;

        if (sec == 60) {
            sec = 0;
            min++;
        }

        if (min == 60) {
            min = 0;
            hr++;
        }

        updateTime();
    }, 1000);
});

// Stop
stopBtn.addEventListener("click", function () {
    clearInterval(timer);
});

// Restart
restartBtn.addEventListener("click", function () {
    clearInterval(timer);

    hr = 0;
    min = 0;
    sec = 0;

    updateTime();
});