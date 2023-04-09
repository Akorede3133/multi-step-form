import React from 'react'
import { useGlobalContext } from '../context/context';
interface barProps {
    step: number;
    text: string
}
const SingleBar = ({step, text}: barProps) => {
    const { count } = useGlobalContext();
  return (
    <article className='flex gap-4'>
        <section className={`number ${step === count + 1 || (step === 4 && count === 4 ) ? ' bg-primary-light-blue  font-bold' : 'text-white'} rounded-full w-8 h-8 flex justify-center items-center border text-primary-marine-blue`}>
            {step}
        </section>
        <section className='hidden md:block info'>
          <article  className='text-neutral-cool-gray'>STEP {step}</article>
          <article className='text-white'>{text}</article>
        </section>
  </article>
  )
}

export default SingleBar