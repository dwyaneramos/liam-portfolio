import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import {Editor} from './components/sections/Editor'
import {ContactBar} from './components/ContactBar'

export const App = () => {
  const [page, setPage] = useState("Home");
  
  return (
    <div className="relative max-h-screen min-h-full overflow-y-hidden">
      <Editor setPage = {setPage} page = {page}/>
      <ContactBar/> 
    </div>
  )
}

export default App
