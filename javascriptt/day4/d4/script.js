var arr =[
   {Name : "Ayush Borban",
    Age : "12",
    url :"https://images.unsplash.com/photo-1724159768352-83513d88f8fc?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},

   {Name : "Aniket Rai",
    Age : "15",
    url :"https://images.unsplash.com/photo-1724159768352-83513d88f8fc?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
   {Name : "Ram Bhai",
    Age : "12",
    url :"https://images.unsplash.com/photo-1724159768352-83513d88f8fc?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
];


var clutter=""
arr.forEach((elem)=>{
    clutter +=` <div class="card">
            <div class="img">
             <img src="${elem.url}" alt="">
            </div>
            <div class="nameblock">
            <h1>Name = ${elem.Name}</h1>
            <p>Age=${elem.age}</p>
        </div>
        </div>`;
})

document.querySelector("main").innerHTML = clutter;