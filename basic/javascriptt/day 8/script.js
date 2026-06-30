// let form = document.queryselector("form");
// let username = document.queryselector("#username");
// let email = document.querySelector("#email");
// let mobile = document.querySelector("#mobile");
// let street = document.queryselector("#street");
// let landmark = document.querySelector("#landmark");
// let area = document.querySelector(".area");

// let userArr = [];

// form.addEventListener("submit", (e)=>{
//     e.preventDefault();

// console.log('before pushing :', userArr);

// let details = {

// name: username.value,
// email: email.value,
// mobile: mobile.value,
// street: street.value,
// LandMark: landmark.value
// };

// userArr.push(details);
// // console.log(userArr);
// // console.log(details);
// area.innerHTML = "";
// userArr.forEach( (elem)=>{
// area.innerHTML += `<h1>${elem.name}</h1>`
// })

// form.reset();

// })

let main = document.querySelector("main")
let h1 = document.querySelector("h1")


let time =1;
let int=setInterval(()=>{
console.log(time);

time +=1;
},100)

setTimeout(()=>{
console.log("stop")
clearInterval(int)
},5000)

main.innerHTML=`<h1>${time}</h1>`