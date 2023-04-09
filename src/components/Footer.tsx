import React from 'react'
import { useGlobalContext } from '../context/context'
const Footer = () => {
  const {setAddons, selectedPlan, formData} = useGlobalContext()
  const { count, setCount } = useGlobalContext();
  const increaseCount = ():void => {
    if (!formData.name && !formData.email && !formData.number && count === 0) {
      return;
    }
    if (!selectedPlan.name && count === 1) {
      return;
    }
    setCount(prevCount => prevCount + 1);

  }
  const decreaseCount = ():void => {
    setCount(prevCount => prevCount - 1);
    setAddons([])
  }
  return (
    <div className='flex justify-between mt-10 bg-white'>
        {count === 0 ? <p></p> : <button onClick={decreaseCount}  className='capitalize text-neutral-cool-gray hover:text-primary-marine-blue hover:font-semibold'>go back</button>}
        <button onClick={increaseCount} className='capitalize text-white bg-primary-marine-blue py-2 px-4  rounded-md'>{count === 3 ? 'confirm' : 'next step'}</button>
    </div>
  )
}

export default Footer