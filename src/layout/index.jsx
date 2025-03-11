import React from 'react'
import CustomTopBar from './CustomTopBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <>
      <CustomTopBar isOverlapping={false} />
      <Outlet />
  </>
  )
}

export default Layout;
