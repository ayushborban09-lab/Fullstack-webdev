let btn = document.querySelector("button")
let red = document.querySelector(".red")
let yellow = document.querySelector(".yellow")
let green = document.querySelector(".green")

let logic =(()=>{
    
    red.style.backgroundColor = "red";

    setTimeout(() => {
        red.style.backgroundColor = "white";
        yellow.style.backgroundColor = "yellow";

    }, 2000);

    setTimeout(() => {
        yellow.style.backgroundColor = "white";
        green.style.backgroundColor = "green";

    }, 4000);


})
btn.addEventListener("click", () => {
logic();


    setInterval(() => {
        green.style.backgroundColor = "white";
       logic();


    }, 6000);
})