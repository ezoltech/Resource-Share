import React from 'react'
import { Menu } from '../Components/Menu'
import { SideBar } from '../Components/SideBar'

const Home = () => {
  return (
    <div className='flex flex-row gap-3'>
        <SideBar />
        <Menu />
    </div>
  )
}

export default Home