import React, { useState } from 'react'
import Navbar from './component/Navbar'
import UserCard from './component/UserCard'
import Form from './component/Form';


const App = () => {
  const [toggle, setToggle] = useState(false);
  const [userdata, setUserData] = useState([]);

  
  return (
    <div className='h-screen p-2 flex flex-col gap-4'>
      <Navbar setToggle ={setToggle}/>
      
      <div className='flex gap-4 '>
       {toggle ?<Form  setUserData={setUserData}/>:<UserCard/>}  
      </div>                                                     
    </div>
    
  )
}

export default App
