import React, { useState } from 'react'
import Cardd from "./compnent/cardd";

const App = () => {
  const [formValues, setFormValues] = useState({  });
  const [users, setUsers] = useState([]);


  const formSubmit = (e) => {                 //ider formSubmit ka function bana diya kyuki hum form ko submit karna chahte hai or inche call kr rha hai 
    e.preventDefault();
    setUsers([...users, formValues]);
    setFormValues({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });
  };







  return (
    <div onSubmit={formSubmit}
      className="flex flex-col items-center justify-center h-screen gap-4 bg-red-200 ">

      <h1 className="text-5xl font-bold" >Form handling</h1>
      <form className=" flex flex-col gap-6 bg-gray-200 p-4 rounded-lg shadow-lg h-70 w-90">
        <input
          onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text" placeholder="Name" />


        <input onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}


          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email" placeholder="Email" />

        <input
          onChange={(e) => setFormValues({ ...formValues, mobile: e.target.value })}

          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text" placeholder="mobile" />


        <input
          onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}

          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password" placeholder="Password" />
          
        <button className="bg-blue-500 text-white m-2 py-2 px-4 rounded-md hover:bg-blue-600">
          Submit</button>
      </form>

      <div className="flex flex-col items-center justify-center h-70 gap-4  ">
        {users.map((elem) => {
          return <Cardd value={elem} />

        })}
      </div>

      

    </div>
  )
}


export default App







