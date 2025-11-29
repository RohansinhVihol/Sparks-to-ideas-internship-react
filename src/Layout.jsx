import React from 'react'
import {outlet} from 'react-router-dom'
import Navbar from './components/Navbar'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <outlet/>
    <footer/>
    </>
  )
}

export default Layout