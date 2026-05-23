 
var div =document.querySelector("div");
var button = document.querySelector("button");

div.style.width="300px";
div.style.height="300px";
div.style.backgroundColor="green";
div.style.borderRadius="50%";
button.style.padding="10px 20px";

body.style.display="flex";
body.style.justifyContent="center";
body.style.alignItems="center";
body.style.flexDirection="column";
body.style.gap="20px";

let toggle=true;
// var a=0;
button.addEventListener("click",()=>{
    

if(toggle){
    div.style.backgroundColor="blue";
    button.textContent="off"; 
    console.log('prateek fuck off')  
    toggle=false;
}else{
      div.style.backgroundColor="red";
      button.textContent="on";
        console.log('prateek fuck onn')  
       toggle=true;
}
    // if(a==0){
    //     div.style.backgroundColor="blue";
    //     a++;
    // }else{
    //       div.style.backgroundColor="red";
    //        a=0;
    // }
})