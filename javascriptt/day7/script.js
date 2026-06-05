let add = document.querySelector("#add")
let inp = document.querySelector("input")
let tasks = document.querySelector(".tasks")

let arr = [];

 let ui=() =>{
    tasks.innerHTML = null;

    arr.forEach((value) => {
        tasks.innerHTML += `<div class="li">
         <h1>${value}</h1>
            <button onclick="ondelete() "id="del ">delete</button>
        </div>`;

    });
};


add.addEventListener("click", () => {
    let value = inp.value
    if (!value) return;

    arr.push(value)
    ui();
    inp.value = ""

});


let ondelete = () => {
    console.log("del");

    arr.pop(); 

    ui();
};

