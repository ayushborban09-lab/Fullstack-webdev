import React, { useState } from 'react'
useState
const Comp3 = () => {
  return (
    <div className ="w-50 border h-fit p-4 flex flex col gap-">
      <div>img</div>
      <div>
        <h1>Name-{name }</h1>
        <p>Age-{age }</p>

      </div>
      <button>Delete</button>

    </div>
  )
}

export default Comp3
