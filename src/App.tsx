import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AddOns from './components/AddOns'
import SideBar from './components/SideBar'
import PersonalInfo from './components/PersonalInfo'
import Footer from './components/Footer'
import Plan  from './components/Plan'
import FinishUp from './components/FinishUp'
import { useGlobalContext } from './context/context'
import Congratulation from './components/Congratulation'
function App() {
  const { count } = useGlobalContext();
  return (
    <div className="App md:p-4 relative md:grid md:bg-white md:gap-4 md:grid-cols-4 h-screen bg-neutral-magnolia">
    <SideBar />
    {count === 0 && <PersonalInfo />}
    {count === 1 && <Plan />}
    {count === 2 && <AddOns />}
    {count === 3 && <FinishUp />}
    {count === 4 && <Congratulation />}
  </div>
  )
}

export default App
