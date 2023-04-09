import React from 'react'
import Footer from './Footer'
import { useGlobalContext } from '../context/context'
import { data } from '../context/context'

const PersonalInfo = () => {
  const {formData, setFormData } = useGlobalContext();
  const handleChange = (event: any) => {
    const {name, type, value, checked} = event.target;
    const newData: data = {
      ...formData,
      [name]: value
    }
    setFormData(newData)
  }
  
  return (
    <div className='card'>
      <header>
        <h2 className='text-2xl text-primary-marine-blue font-medium tracking-wider'>Personal info</h2>
      </header>
      <p className='text-lg text-neutral-cool-gray'>
        Please provide your name, email address, and phone number
      </p>
      <form action="">
        <p>
          <label className='block py-2' htmlFor="name">Name</label>
          <input onChange={(e)=> handleChange(e)} className='input' type="text" name='name' value={formData.name} required placeholder='e.g. Stephen King'/>
        </p>
        <p>
          <label className='block py-2' htmlFor="email">Email Address</label>
          <input  onChange={(e)=> handleChange(e)} className='input' value={formData.email} type="text" name='email' required placeholder='e.g. stephenking@lorem.com' />
        </p>
        <p>
          <label className='block py-2' htmlFor="number">Phone Number</label>
          <input onChange={(e) => handleChange(e)} className='input' type="tel" value={formData.number} name='number' required placeholder='e.g. +1 234 567 890' />
        </p>
      </form>
      <Footer />
  </div>
  )
}

export default PersonalInfo