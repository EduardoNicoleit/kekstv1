import React from 'react'
import { Navbar, Home, Selections, FirstPage, DesktopB } from './pages';
import './App.css'

function App() {

  return (
    <div className="app">
      <div className='m-[50px] border-[1px] text-white'>
        <Navbar />
        <DesktopB />
        {/* <FirstPage /> */}
      </div>
    </div>
  )
}

export default App
