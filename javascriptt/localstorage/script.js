let btn = document.querySelector("button");
let input = document.querySelector("input");
let main = document.querySelector("main");



let arr = JSON.parse(localStorage("arr")) || arr;

let ui = () => {
    main.textContent = '';
    arr.forEach((elem) => {
        let h1 = document.createElement("h1");
        h1.textContent = elem;
        main.append(h1);

    });


};
ui();
