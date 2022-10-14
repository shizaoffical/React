import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout() {
  return (
    <div>
        <Outlet />
        <Navbar />
        <Footer />
    </div>
  )
}

export default Layout