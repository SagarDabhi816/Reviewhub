import React from 'react'
import "./layout.scss"
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

function layout() {
  return (
     <div className="layout">
      <div>
        <Navbar />
      </div>
      <div className="content">
       <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default layout
