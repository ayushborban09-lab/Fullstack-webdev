import React, { useState } from 'react'
import Navbar from './component/Navbar'

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=''>
      <Navbar setToggle ={setToggle}/>
    </div>
  )
}

export default App
