import React from 'react'
import { useState } from 'react'
const Form = (setUserData) => {
  const [FormData, setFormData] = useState(initialState);

  let formSubmit =(e) =>{
    e.preventDefault();
    setUserData([...FormData,UserData]);
    setFormData({
      name:"",
      email:"",
      mobile:"",
      url:""
    });

  }

  
  return (
    <div className='h-screen w-screen flex justify-content items-center p-3'>
        
  
        <form 

        onSubmit={formSubmit}
         className="flex rounded-xl gap-4 flex-col w-[40%] bg-white p-5" >
          

          {/* id date now? */}
        <input
         onChange={()=>setFormData({...FormData,name: e.target.value})}
          className="p-2 border border-gray-500 rounded"
          type="text"
          placeholder="Name"
        />
        <input 
        onChange={()=>setFormData({...FormData,email: e.target.value})}
                  className="p-2 border border-gray-500 rounded"
          type="text"
          placeholder="Email"
        />
        <input
        onChange={()=>setFormData({...FormData,mobile: e.target.value})}
          className="p-2 border border-gray-500 rounded"
          type="text"
          placeholder="mobile"
        />
        <input
        onChange={()=>setFormData({...FormData,url: e.target.value})}
          className="p-2 border border-gray-500 rounded"
          type="text"
          placeholder="Image url"
        />
        <button className="p-2 rounded bg-blue-600 text-white">
          Submit</button>

           </form>
      
    </div>
  )
}

export default Form


