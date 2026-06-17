let btn = document.querySelector("button");
let box = document.querySelector(".box");
let box1 = document.querySelector(".box1");
let span = document.querySelector("#timee");
let scoree = document.querySelector("#scoree");



btn.addEventListener('click', () => {

    let interval
    let time = 0
    let maxh = box.clientHeight;
    let maxw = box.clientWidth;

    interval = setInterval(() => {

        time += 1
        span.textContent = time
        console.log("hey")
        let Ry = Math.random() * maxh;
        let RX = Math.random() * maxw;

        box1.style.top = `${Ry}px`;
        box1.style.left = `${RX}px`;

    }, 1000);

    setTimeout(() => {
        clearInterval(interval)
    }, 10000);


});



 let scoreee= 0
// box1.addEventListener('click', () =>{
//     scoreee +=1
//     scoree.textContent = scoreee


//     // scoree =''

// })
let body = document.body;
// for fun 
let main =document.querySelector("main");
let sc =document.querySelector("#sc");
let ti =document.querySelector("#ti");
// ider tak
box1.addEventListener("click", () => {
    scoreee +=1;
    scoree.textContent = scoreee;

    let randomColor = `rgb(
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)}
    )`;

    body.style.backgroundColor = randomColor;
    
// fun start
     let rdcolor = `rgb(
        ${Math.floor(Math.random()*250)},
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)}
    )`;
       box.style.backgroundColor = rdcolor
   
   
       let rdmain = `rgb(
        ${Math.floor(Math.random()*240)},
        ${Math.floor(Math.random()*240)},
        ${Math.floor(Math.random()*256)}
    )`;

    main.style.backgroundColor= rdmain;

     let rdbox1 = `rgb(
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*235)},
        ${Math.floor(Math.random()*230)}
    )`;
       box1.style.backgroundColor=rdbox1;
 let rdtop = `rgb(
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)}
    )`;
    scoree.style.color=rdtop;
    span.style.color=rdtop;
    sc.style.color=rdtop;
    ti.style.color=rdtop;
    // fun end
       
});