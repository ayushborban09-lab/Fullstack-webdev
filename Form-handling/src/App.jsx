import React from 'react'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-red-200 ">

      <h1 className ="text-5xl font-bold" >Form handling</h1>
      <form  className=" flex flex-col gap-6 bg-gray-200 p-4 rounded-lg shadow-lg h-70 w-90">
        <input 
        onchange={(e)=>console.log(e.target.value)}
         className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Name" />
        <input className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Email" />
        <input className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="mobile" />
        <input className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="Password" />
        
      </form>
    </div>
  )
}

export default App
