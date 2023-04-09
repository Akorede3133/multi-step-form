import React, { useRef } from 'react'
import check from '../../src/images/icon-checkmark.svg';
import { useGlobalContext } from '../context/context';
import { data } from '../context/context';
import { addonProps } from '../context/context';
interface AddOn {
    type: string;
    info: string;
    year: number;
    month: number;
    value: string;
    names: string;
    id: string;
}
const SingleAddOn = ({ type, info, year, month, value, names, id }: AddOn) => {
    const checkRef = useRef<HTMLInputElement>(null)
    const { monthlyPlan, addons, setAddons, formData, setFormData } = useGlobalContext();
    const handleChange = (event: any) => {
        const {name, checked, value, type, id} = event.target;
        const newData: addonProps = {
            name: value,
            month,
            year,
            id,
        }
        if (checked) {
            setAddons([...addons, newData]) 
        } 
        if (!checked && addons.length > 0) {
             const newAddOn: addonProps[] = addons.filter(item => item.id !== id);
             setAddons(newAddOn)
        }
    }
  return (
    <article className='flex cursor-pointer items-center justify-between gap-5 border p-3 py-4 rounded-[10px]'>
        <section>
            <article className='flex items-center gap-5'>
                <input ref={checkRef} id={id} onChange={(e) => handleChange(e)} type="checkbox" name={names} value={value} className=' cursor-pointer check before:content-[url(../../src/images/icon-checkmark.svg)] checked:bg-primary-purpish-blue' />
                <section>
                    <p  className='text-primary-marine-blue font-bold tracking-wide'>{type}</p>
                    <p className=' text-neutral-cool-gray'>{info}</p>
                </section>
            </article>
        </section>
        {monthlyPlan && <p className=' text-primary-purpish-blue'>{`+$${month}/mo`}</p>}
        {monthlyPlan || <p className=' text-primary-purpish-blue'>{`+$${year}/yr`}</p>}
    </article>
  )
}

export default SingleAddOn