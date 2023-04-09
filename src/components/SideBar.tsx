import React from 'react'
import SingleBar from './SingleBar'

const SideBar = () => {
  return (
    <div className="bg-mobile md:bg-[url(../../src/images/bg-sidebar-desktop.svg)] flex justify-center md:justify-start md:flex-col gap-8 p-4 md:col-span-1 md:h-screen h-36 bg-no-repeat bg-cover bg-center">
      <SingleBar step={1} text='YOUR INFO'/>
      <SingleBar step={2} text='SELECT PLAN'/>
      <SingleBar step={3} text='ADD-ONS'/>
      <SingleBar step={4} text='SUMMARY'/>
    </div>
  )
}

export default SideBar