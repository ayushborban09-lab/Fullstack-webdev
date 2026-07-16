import React from 'react'

const cardd = ({value}) => {
  return (
    <div
    className="flex flex-col items-center justify-center h-70 gap-4 bg-pink-200 font-bold p-4 rounded-lg shadow-lg w-90">
      <h1>Name - {value.name}</h1>
      <h2>Email - {value.email}</h2>
      <h3>mobile - {value.mobile}</h3>
      <h4>password - {value.password}</h4>
    </div>
  )
}

export default cardd

