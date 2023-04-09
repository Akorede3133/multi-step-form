import { createContext, useContext, useState } from "react"
import arcade from '../../src/images/icon-arcade.svg';
import advanced from '../../src/images/icon-advanced.svg';
import pro from '../../src/images/icon-pro.svg';
interface valueProps {
    count: number;
    selectedPlan: addonProps;
    monthlyPlan: boolean;
    plans: PlanProp[];
    addons: addonProps[];
    formData: data;
    setFormData:  React.Dispatch<React.SetStateAction<data>>;
    setAddons: React.Dispatch<React.SetStateAction<addonProps[]>>
    setMonthlyPlan: React.Dispatch<React.SetStateAction<boolean>>
    setPlans: React.Dispatch<React.SetStateAction<PlanProp[]>>
    setCount:  React.Dispatch<React.SetStateAction<number>>;
    setSelectedPlan:React.Dispatch<React.SetStateAction<addonProps>>;
}
export interface PlanProp {
    type: string;
    monthly: number;
    yearly: number;
    image: string;
    selected: boolean;
    id: string;
}
export interface data {
  name: string;
  email: string;
  number: string;
  online: string;
  storage: string;
  profile: string;
}
const Plans: PlanProp[] = [
    { type: 'Arcade',
      id: '1', 
      monthly: 9,
      image: arcade,
      yearly: 90,
      selected: false
    },
    { type: 'Advanced',
      id: '2', 
    monthly: 12,
    image: advanced,
    yearly: 120,
    selected: false
  },
  { type: 'Pro', 
    id: '3',
    monthly: 15,
    image: pro,
    yearly: 150,
    selected: false
  }
  ]
interface childrenProp {
    children: React.ReactNode
}
export interface addonProps {
  name: string;
  month: number;
  year: number;
  id?: string;
}
const context = createContext({} as valueProps)
const AppGlobal = ({ children }: childrenProp) => {
  const [formData, setFormData] = useState<data>({
    name: '',
    email: '',
    number: '',
    online: '',
    storage: '',
    profile: ''
  })
  const [plans, setPlans] = useState<PlanProp[]>(Plans)
  const [count, setCount] = useState<number>(0);
  const [addons, setAddons] = useState<addonProps[]>([]);
  const [monthlyPlan, setMonthlyPlan] = useState<boolean>(true);
  const [selectedPlan, setSelectedPlan] = useState({} as addonProps);
  return <context.Provider value={{count, 
  selectedPlan, 
  plans,
  monthlyPlan,
  addons,
  formData,
  setFormData,
  setAddons,
  setCount,
  setPlans,
  setSelectedPlan,
  setMonthlyPlan
  }}>
    {children}
  </context.Provider>
}
const useGlobalContext = () => {
    return useContext(context);
}
export {context, AppGlobal, useGlobalContext}