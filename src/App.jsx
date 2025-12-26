import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import {Editor} from './components/sections/Home'
import {ContactBar} from './components/ContactBar'

export const App = () => {
  
  return (
    <div className="relative max-h-screen min-h-full overflow-y-hidden">
      <Editor/>
      <ContactBar/> 
    </div>
  )
}

export default App
