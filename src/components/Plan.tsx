import React, { useState } from 'react'
import Footer from './Footer'
import SinglePlan from './SinglePlan';
import { useGlobalContext } from '../context/context';
const Plan = () => {
  const {plans, setMonthlyPlan, monthlyPlan} = useGlobalContext();
  const toggleMonthly = () => {
    setMonthlyPlan(prevPlan => !prevPlan)
  }
  return (
    <div className='card'>
      <header>
        <h2 className='text-2xl text-primary-marine-blue font-medium tracking-wider'>Select Your Plan</h2>
      </header>
      <p className='text-lg text-neutral-cool-gray py-2'>
        You have the option of monthly or yearly billing.
      </p>
      <section className="grid gap-4 md:grid-cols-3 mt-4">
        {
          plans.map(plan => {
            const {type, monthly, image, yearly, selected, id} = plan;            
            return <SinglePlan key={id} type={type} id={id} monthly={monthly} image={image} yearly={yearly} selected={selected} />
          })
        }
      </section>
      <section className='flex items-center gap-4 bg-neutral-magnolia justify-center py-3 mt-6'>
        <span className=''>Monthly</span>
        <span onClick={toggleMonthly} className={` cursor-pointer h-4 w-7 ${monthlyPlan ? 'before:left-1' : 'before:left-[50%]'} rounded-lg block bg-primary-marine-blue relative before:absolute before:bg-white before:h-[80%] before:top-[50%] before:translate-y-[-50%] before:w-[50%] before:rounded-full`}></span>
        <span>Yearly</span>
      </section>
    <Footer />
</div>
  )
}

export default Plan