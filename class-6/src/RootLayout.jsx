/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function RootLayout({logo}) {
  return (
    <>
        <NavBar logo={logo} />
        <Outlet/>
    </>
  )
}

export default RootLayout