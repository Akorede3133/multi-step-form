import React from 'react'
import Footer from './Footer'
import SingleAddOn from './SingleAddOn'
const AddOns = () => {
  return (
    <div className='card'>
      <header>
        <h2 className='text-2xl text-primary-marine-blue font-medium tracking-wider'>Select Your Plan</h2>
      </header>
      <p className='text-lg text-neutral-cool-gray py-2'>
        Add-ons help enhances your gaming experience.
      </p>
      <section className='grid gap-4'>
        <SingleAddOn type='Online service' info='Access to multiplayer games' month={1} year={10} value='Online service' names="online" id='1' />
        <SingleAddOn type='Larger storage' info='Extra 1TB of cloud save' month={2} year={20} value='Larger storage' names="storage" id='2' />
        <SingleAddOn type='Customizable profile' info='Custom theme on your profile' month={2} year={20} value='Customizable profile' names="profile" id='3' />
      </section>
    <Footer />
  </div>
  )
}

export default AddOns