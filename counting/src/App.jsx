import React from 'react'

const App = () => {
  let [count, setCount] = React.useState(0);  
  return (
    <div>
      <h1>Count is= {count}  </h1>
      <button onClick={()=>{
        setCount(count + 1)
        setCount(count - 2)
        setCount(count - 3)
       
      }} >
        increment

      </button>
    </div>
  )
}



export default App
       
       

