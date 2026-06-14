let button= document.querySelector("button");
let main = document.querySelector("main");


let arr= [sr,typ, frat,br,fff,gggg ]

button.addEventListener("click",()=>{
    let random  = Math.random()* arr.length;
    let no = Math.floor(random);
    const p =document.createElement("p")
    p.textContent =(arr[no]);
    p.style.color = color[no]
    main.append(p)


})


// event =windo ke upper touch karke changese
// eveent propogation= mouseevent=pointer events
// =keyboard event
// submit event 
// input event

// window.adden=vener("click",(events)
// keyup event )

sdsd