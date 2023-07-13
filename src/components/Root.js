import React from 'react'
import Head from './Head'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Root = () => {
  return (
    <div>
        <Head/>
        <div className='flex mb-20'>
            <Sidebar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Root