let inp = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    if(inp.getAttribute("type")=="password"){
    inp.setAttribute("type","text");
    btn.textContent="hide password";
    
}  else{
    inp.setAttribute("type","password")
      btn.textContent="show password";

}
})

























// var body=document.body;
// var  h1=document.querySelector("h1");
// var button = document.querySelector("button");

// body.style.display="flex";
// body.style.justifyContent="center";
// body.style.alignItems="center";
// body.style.flexDirection="column";
// body.style.gap="20px";



// button.style.padding="20px 30px";

// let toggle=true;
// button.addEventListener("click",()=>{
// if(toggle){
//     body.style.backgroundColor="black";
//     h1.style.color="white";
//     toggle=false;
//     button.style.backgroundColor="black";
//     button.style.color="white"; 
//     body.style.transition=" 2s";
// }else{
//       body.style.backgroundColor="white"; 
//        toggle=true;
//        h1.style.color="black";
//         button.style.backgroundColor="white";
//     button.style.color="black"; 
//     }
// })



// innerhtml
// h1.textContent="hello world"
// attribute 
// img.getAttribute("src")
// setAttribute("widht","200px"
// ?classlist
// let a=span.classList.add("red");
// domw arctac
// bollen t f
// falsy values => 0 .undifined,null,-1,NaN,"",false 
// 




