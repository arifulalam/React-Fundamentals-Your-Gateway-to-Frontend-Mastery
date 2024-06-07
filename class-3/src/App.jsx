/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import * as app from './assets/js/app'
import Navbar from './components/layouts/Navbar'
import Content from './components/layouts/Content'
import { Footer } from './components/layouts/Footer';

function App() {
  const {menu} = app.default;
  
  return (
    <>
      <div className='container-full'>
        <Navbar logo={reactLogo} menu={menu}/>
        <div><Content/></div>
        <Footer menu={app.default.menu_footer}/>
      </div>
    </>
  )
}

export default App
