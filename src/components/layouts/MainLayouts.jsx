import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'
import Navber from '../Navber'

const MainLayouts = () => {
  return (
    <>
    <TopBar/>
    <Navber/>
      <Outlet/>
    </>
  )
}

export default MainLayouts