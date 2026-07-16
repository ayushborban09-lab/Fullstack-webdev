import React, { useState } from 'react'
import Navbar from './component/Navbar'
import UserCard from './component/UserCard'
import Form from './component/Form';


const App = () => {
  const [toggle, setToggle] = useState(false);
  const [userData, setUserData] = useState([]);


  const deleteUser = (id) => {
    const result = userData.filter((elem) => elem.id !== id);
    setUserData(result);
  };

  
  return (
    <div className='h-screen p-2 flex flex-col gap-4'>
      <Navbar setToggle ={setToggle}/>
      
      <div className='flex gap-4 '>
      {toggle ? (
        <Form setUserData={setUserData} />
      ) : (
        <div className="flex flex-wrap gap-5">
          {userData.map((elem) => (
            <UserCard key={elem.id} onDelete={deleteUser} user={elem} />
          ))}
        </div>
      )}
      </div>                                                     
    </div>
    
  )
}

export default App
