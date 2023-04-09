import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context/context';
import { PlanProp } from '../context/context';
import { addonProps } from '../context/context';
const SinglePlan = ({ type, yearly, monthly, image, id, selected }: PlanProp) => {  
  const {plans, setPlans, setSelectedPlan, selectedPlan, monthlyPlan} = useGlobalContext();
  const cardRef = useRef<HTMLElement>(null!)
  const changeBorder = (id: string) => {
    const newPlan: PlanProp[] = plans.map((plan: PlanProp) => {
      if (plan.id === id) {
        plan.selected = true;
        const planInfo: addonProps = {
          name: plan.type,
          month: plan.monthly,
          year: plan.yearly,
        }
        setSelectedPlan(planInfo);
      } else {
        plan.selected = false;
      }
      return plan;
    })
    setPlans(newPlan);
  }
  return (
    <article ref={cardRef} id={id} onClick={()=> changeBorder(id)} className={`flex ${selected && 'border-blue-500'} cursor-pointer  gap-5 border p-3 py-4 rounded-[10px] md:flex-col md:h-52 md:justify-around hover:border-primary-purpish-blue`}>
          <section>
            <img src={image} alt="" />
          </section>
          <section className='grid gap-1'>
            <p className='text-primary-marine-blue font-bold tracking-wide'>{type}</p>
            {monthlyPlan &&  <p className=' text-neutral-cool-gray text-xs'>{`$${monthly}/mo`}</p>}
            {monthlyPlan || <p className=' text-neutral-cool-gray text-xs'>{`$${yearly}/yr`}</p>}
            {monthlyPlan || <p className=' text-primary-marine-blue text-xs font-semibold'>2 months free</p>}
          </section>
    </article>
  )
}

export default SinglePlan