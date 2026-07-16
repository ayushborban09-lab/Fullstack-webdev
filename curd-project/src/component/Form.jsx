import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const startingphase = {
  name: '',
  email: '',
  mobile: '',
  url: '',
}

const Form = ({ setUserData }) => {
  const [formData, setFormData] = useState(startingphase)

  const formSubmit = (e) => {
    e.preventDefault()
    setUserData((prev) => [...prev, { ...formData, id: nanoid() }])
    setFormData(startingphase)
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center p-3'>
      <form
        onSubmit={formSubmit}
        className='flex rounded-xl gap-4 flex-col w-[40%] bg-white p-5'
      >
        <input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className='p-2 border border-gray-500 rounded'
          type='text'
          placeholder='Name'
        />
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className='p-2 border border-gray-500 rounded'
          type='email'
          placeholder='Email'
        />
        <input
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          className='p-2 border border-gray-500 rounded'
          type='text'
          placeholder='Mobile'
        />
        <input
          value={formData.url}
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          className='p-2 border border-gray-500 rounded'
          type='text'
          placeholder='Image url'
        />
        <button className='p-2 rounded bg-blue-600 text-white' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form


