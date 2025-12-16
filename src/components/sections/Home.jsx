import {useState, useEffect} from "react";
import { PiCursorClick, PiCursor } from "react-icons/pi";
import { FaRegHandPointer } from "react-icons/fa6";

export const Home = () => {
  const [stageNum, setAnimationStage] = useState(1);

  useEffect(() => {
    const t1 = setTimeout(() => setAnimationStage(1), 1000);
    const t2 = setTimeout(() => setAnimationStage(2), 2500);

  return () => {
      clearTimeout(t1)
      clearTimeout(t2)

    }
  }, [])
  
  const animationStages = {
    1 : {icon : PiCursor        , classes : "z-1 translate-x-[30vw] translate-y-10 animate-cursor-1"},
    2 : {icon : FaRegHandPointer, classes : "z-1 -translate-x-105 translate-y-10 animate-cursor-2" },
    3 : {icon : PiCursor        , classes : "z-1 -translate-x-20 translate-y-10"},
  }

  const CurrentIcon = animationStages[stageNum].icon
  const CurrentClasses = animationStages[stageNum].classes

  return (
    <section className = "h-screen">
      <div className = "relative flex flex-col items-align h-screen items-center justify-center gap-4 ">

        <div className = "flex flex-row items-end ml-35">
          <div className = "flex flex-row justify-start w-2xl ">
            <h1 className = "bg-[#55bd5c] py-4 px-10 rounded-xl text-8xl text-white font-mono font-bold">Liam</h1>
            <h1 className = "bg-[#55bd5c] py-4 -ml-2 w-0 rounded-r-xl text-8xl overflow-hidden text-white font-mono font-bold animate-resize">Wadek</h1>
          </div>

          <div>
            <CurrentIcon size = {90} color = {"white"} className = {CurrentClasses}/>
          </div>

          
        </div>
          <h2 className = "bg-[#a655bd] py-4 px-5 text-6xl rounded-xl text-white font-mono font-bold">Film Freelancer</h2>
      </div> 

    </section>
  )
}
