import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import {Editor, Toolbar, Cursor, Timeline} from './components/sections/Home'

export const App = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [stageNum, setAnimationStage] = useState(1);
  

  useEffect(() => {
    const t1 = setTimeout(() => setAnimationStage(1), 1000);
    const t2 = setTimeout(() => setAnimationStage(2), 1500);
    const t3 = setTimeout(() => setAnimationStage(3), 3000);
    const t4 = setTimeout(() => setAnimationStage(4), 4000);
    const t5 = setTimeout(() => {
      setAnimationStage(5);
      setShowEditor(true);
    }, 5000);
    const t6 = setTimeout(() => setAnimationStage(6), 6000);


  return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
      clearTimeout(t6)

    }
  }, [])

  return (
    <div className="relative max-h-screen min-h-full overflow-y-hidden">
      <Editor showEditor = {showEditor} stageNum = {stageNum}/>
      <Cursor stageNum = {stageNum}/>
      <Toolbar showEditor = {showEditor}/>
      <Timeline setShowEditor = {setShowEditor} stageNum = {stageNum}/>
      
    </div>
  )
}

export default App
