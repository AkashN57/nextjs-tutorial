import React from 'react'
import Navbar from '../components/Navbar'

function Layout({children}) {
  return (
    <div>
        <Navbar/> <div>{children}</div>
    </div>
  )
}

export default Layout