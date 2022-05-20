import React from 'react'
import { Outlet } from 'react-router-dom'
import { Mainbar, Navbar, Sidebar } from '../../components'

const SharedLayout = () => {
  return (
    <div>
      <div>
        <Mainbar />
        <Sidebar />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default SharedLayout
