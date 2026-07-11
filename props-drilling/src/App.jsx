import React from 'react'
import Card1 from './card1'


 let arr =[
  {
    name:ayuuuuuuuuuu,
    age:25,
    Image:'https://images.unsplash.com/photo-1783321284120-61d9a47c92a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  },
  
  {
    name:ayuuuuuuuuuu,
    age:25,
    Image:'https://images.unsplash.com/photo-1783321284120-61d9a47c92a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  },
  
  {
    name:ayuuuuuuuuuu,
    age:25,
    Image:'https://images.unsplash.com/photo-1783321284120-61d9a47c92a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  },
  
  {
    name:ayuuuuuuuuuu,
    age:25,
    Image:'https://images.unsplash.com/photo-1783321284120-61d9a47c92a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  },
  {
    name:ayuuuuuuuuuu,
    age:25,
    Image:'https://images.unsplash.com/photo-1783321284120-61d9a47c92a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  },


  
 ]



//   return (
//     <div className="gap-5 h-screen p-4 flex">
//       {arr.map((elem) => {
//         return <UserCard user={elem} />;
//       })}
//     </div>
//   );
// };
const App = () => {
  
  return (
    <div>
      {
        arr.map((elem) => {
          return <Card1 user={elem} />;
        })
      }
    </div>
  )
}

export default App  
