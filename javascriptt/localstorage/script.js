let btn = document.querySelector("button");
let input = document.querySelector("input");
let main = document.querySelector("main");



let arr = JSON.parse(localStorage.getItem("arr")) || [];

let ui = () => {
    main.textContent = '';
    arr.forEach((elem) => {
        let h1 = document.createElement("h1");
        h1.textContent = elem;
        main.append(h1);

    });
    // JSON.stringify()


};
ui();

btn.addEventListener("click",()=>{
    let value=input.value;
        arr.push(value);
        localStorage.setItem("arr", JSON.stringify(arr));
       input.value = "";
        ui();
    

     


})