import React from 'react'
import thank from '../../src/images/icon-thank-you.svg';
const Congratulation = () => {
  return (
    <div className='card px-5 flex flex-col items-center justify-center space-y-5 h-[50%]'>
      <img src={thank} alt="" className='w-12' />
      <h2 className=' text-primary-marine-blue font-bold text-2xl'>Thank you!</h2>
      <p className=' text-center text-neutral-cool-gray leading-7'>
        Thanks for comfirming your subscription!
        We hope you have fun using our platform.
        If you ever need support, please Feel free to
        email us at support@loremgaming.com
      </p>
    </div>
  )
}

export default Congratulation