import React from 'react'
import Footer from './Footer'
import { useGlobalContext } from '../context/context'
const FinishUp = () => {
  const {addons, monthlyPlan, setCount, setAddons, selectedPlan: {name, month, year}} = useGlobalContext();
  const total = addons.reduce((acc, val) => {
    acc.monthTotal += val.month;
    acc.yearTotal += val.year;
    return acc;
  }, {
    monthTotal: 0,
    yearTotal: 0,
  })
  const backToPlan = () => {
    setCount(1);
    setAddons([]);
  }  
  return (
    <div className='card'>
      <header>
        <h2 className='text-2xl text-primary-marine-blue font-medium tracking-wider'>
          Finishing up
        </h2>
      </header>
      <p className='text-lg text-neutral-cool-gray'>
        Double-check everything looks OK before confirming.
      </p>
      <article className='flex bg-neutral-magnolia  justify-between border p-3 py-4 rounded-[5px]'>
          <section className='grid gap-1'>
            <p className='text-primary-marine-blue font-bold tracking-wide'>{name}(Monthly)</p>
            <p onClick={backToPlan} className=' text-neutral-cool-gray text-xs cursor-pointer underline'>change</p>
          </section>
          <p className='text-primary-marine-blue font-bold tracking-wide'>{monthlyPlan ? `$${month}/mo` : `$${year}/yr`}</p>
    </article>
    {
      addons.length > 0 && 
        <article className='grid bg-neutral-magnolia gap-4 border p-3 py-4 rounded-[5px]'>
        {
          addons.map((item, index) => {
            const {name, month, year} = item;
            return (
              <section key={index} className=' flex justify-between gap-1'>
              <p className=' text-neutral-cool-gray text-xs cursor-pointer'>{name}</p>
                <p className='text-neutral-cool-gray tracking-wide'>{monthlyPlan ? `+$${month}/mo` : `+$${year}/yr`}</p>
              </section>
            )
          })
        }
      </article>
    }
    <article className=' flex justify-between mt-4'>
      <p className='text-neutral-cool-gray tracking-wide'>Total ({monthlyPlan ? 'per month' : 'per year'})</p>
      <p className=' text-primary-purpish-blue'>{monthlyPlan ? `$${total.monthTotal + month}/mo` : `$${total.yearTotal + year}/yr`}</p>
    </article>
    <Footer />
    </div>
  )
}

export default FinishUp