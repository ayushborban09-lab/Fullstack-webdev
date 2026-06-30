let inp = document.querySelector("input");
let add= document.querySelector("#add");
let tasks = document.querySelector(".tasks")
let edit =document.querySelector("#edit")
let del =document.querySelector("#del")
add.addEventListener("click",()=>{
    let value = inp.value
 
    if(!value) return

    tasks.innerHTML +=`<div class="li">
        <h2>${value}</h2>
        <div>
          <button id="edit">Edit</button>
          <button id="del">Delete</button>
        </div>
      </div>`

      inp.value=""




})

