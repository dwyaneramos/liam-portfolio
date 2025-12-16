import {useState, useEffect} from "react";
import { PiCursorClick, PiCursor } from "react-icons/pi";
import { FaRegHandPointer } from "react-icons/fa6";

export const Home = () => {
  const [stageNum, setAnimationStage] = useState(1);

  useEffect(() => {
    const t1 = setTimeout(() => setAnimationStage(1), 1000);
    const t2 = setTimeout(() => setAnimationStage(2), 2000);
    const t3 = setTimeout(() => setAnimationStage(3), 3000);
    const t4 = setTimeout(() => setAnimationStage(4), 4000);
    const t5 = setTimeout(() => setAnimationStage(5), 5000);
  return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)

    }
  }, [])
  
  const animationStages = {
    1 : {icon : PiCursor        , iconClasses : " -translate-x-100 translate-y-10 animate-cursor-1", titleAnimation : "", subtitleAnimation : "" },
    2 : {icon : FaRegHandPointer, iconClasses : " -translate-x-105 translate-y-10 animate-cursor-2" , titleAnimation : "animate-resize", subtitleAnimation : ""},
    3 : {icon : PiCursor        , iconClasses : "-translate-x-20 translate-y-10 animate-cursor-3", titleAnimation : "animate-resize", subtitleAnimation : ""},
    4 : {icon : FaRegHandPointer, iconClasses : "-translate-x-30 translate-y-40 animate-cursor-1", titleAnimation : "animate-resize", subtitleAnimation : "animate-subtitle-resize"},
    5 : {icon : PiCursor,         iconClasses : "-translate-x-30 translate-y-40 ", titleAnimation : "animate-resize", subtitleAnimation : "animate-subtitle-resize"},
  }

  const CurrentIcon = animationStages[stageNum].icon
  const CurrentClasses = animationStages[stageNum].iconClasses
  const TitleAnimation = animationStages[stageNum].titleAnimation
  const SubtitleAnimation = animationStages[stageNum].subtitleAnimation

  return (
    <section className = "h-screen">
      <div className = "relative flex flex-col items-align h-screen items-center justify-center gap-4 ">

        <div className = "flex flex-row items-end ml-35">
          <div className = "flex flex-row justify-start w-2xl ">
            <h1 className = "bg-[#55bd5c] py-4 px-10 rounded-xl text-8xl text-white font-mono font-bold">Liam</h1>
            <h1 className = {` bg-[#55bd5c] py-4 -ml-2 w-0 rounded-r-xl text-8xl overflow-hidden text-white font-mono font-bold ${TitleAnimation}`}>Wadek</h1>
          </div>

          <div className = {`z-1 ${CurrentClasses}`}>
            <CurrentIcon size = {90} color = {"white"}/>
          </div>

          
        </div>
          <h2 className = {`z-0 translate-x-[100vw] bg-[#a655bd] py-4 px-5 text-6xl rounded-xl text-white font-mono font-bold  ${SubtitleAnimation}`}>Film Freelancer</h2>
      </div> 

    </section>
  )
}
