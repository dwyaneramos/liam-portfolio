import {useState, useEffect} from "react";
import { PiCursorClick, PiCursor } from "react-icons/pi";
import { FaRegHandPointer } from "react-icons/fa6";
import { RiArrowGoBackFill, RiArrowGoForwardFill } from "react-icons/ri";
import { FaPlay, FaStop } from "react-icons/fa";

export const ClipRow = ({fromRight}) => {
  const clips = Array.from({length: 5})
  const colors = ["red", "blue", "green", "yellow"]


  const [clipColors] = useState(
    clips.map(() => colors[Math.floor(Math.random() * colors.length)])
  );

  return (
    <div className = {`translate-clips-start `}>
      <div className = "pt-60 pb-10  w-max  animate-move-clip">
        <div className = " flex gap-4 ">
          {clipColors.map((clip, index) => {
            const color = clipColors[index]
            return (
              <div key = {index} className = "rounded-xl min-w-lg py-10 relative"
                                style = {{backgroundColor : color}}>
              </div>
            )
          })}

          {clipColors.map((clip, index) => {
            const color = clipColors[index]
            return (
              <div key = {index} className = "rounded-xl min-w-lg py-10 relative"
                                style = {{backgroundColor : color}}>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export const Home = () => {
  const [stageNum, setAnimationStage] = useState(1);

  useEffect(() => {
    const t1 = setTimeout(() => setAnimationStage(1), 1000);
    const t2 = setTimeout(() => setAnimationStage(2), 1500);
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
      <div className = "relative flex h-screen flex-col items-align items-center justify-center gap-0 ">

          <div className = "bg-[#4f5b61] min-h-30 min-w-screen flex flex-row gap-10 items-align items-center">
            <RiArrowGoBackFill size = {90} color = {"white"} className="ml-10"/>
            <RiArrowGoForwardFill size = {90} color = {"white"}/>
            <FaPlay size = {90} color = {"white"}/>
            <FaStop size = {90} color = {"white"}/>
            
          </div>
          
          {/*Name Clip*/}
          <div className = "pl-40 bg-[#243036] min-w-screen py-5 min-h-40 flex flex-row items-center justify-center">
            <div className = "flex flex-col">
              <div className = "flex flex-row">
                <h2 className = {`text-3xl pl-2 pt-2 font-mono text-white  bg-[#4fab55] rounded-t-xl w-xs`}>
                  My Name:
                </h2>
                <div className = {`bg-[#4fab55] rounded-tr-xl w-0 -ml-3 ${TitleAnimation}`}>
                </div>
              </div>
              <div className = {`flex flex-row justify-start min-w-2xl `}>
                <h1 className = "bg-[#55bd5c] py-4 px-10 rounded-b-xl text-8xl min-w-xs text-white font-mono font-bold">Liam</h1>
                <h1 className = {` bg-[#55bd5c] py-4 -ml-3 w-0 rounded-br-xl text-8xl overflow-hidden text-white font-mono font-bold ${TitleAnimation}`}>Wadek</h1>
              </div>
            </div>

            <div className = {`z-1 ${CurrentClasses}`}>
              <CurrentIcon size = {90} color = {"white"}/>
            </div>

          
          </div>

        
          {/*Title Clip*/}
          <div className = "pl-10 bg-[#243036] min-w-screen min-h-30 pb-5 flex flex-row items-center justify-center">
            <div className = "flex flex-col ">
              <h2 className ={`bg-[#844496] rounded-t-xl font-mono text-white text-2xl pl-2 pt-2 translate-x-[100vw] ${SubtitleAnimation}`}>What I am:</h2>
              <h2 className = {`z-0 translate-x-[100vw] bg-[#a655bd] py-4 px-5 text-6xl rounded-b-xl text-white font-mono font-bold ${SubtitleAnimation}`}>Film Freelancer</h2>
            </div>
          </div>

        
      </div> 


    </section>
  )
}
