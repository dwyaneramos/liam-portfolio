

import { IoMailOutline, IoPlaySkipBackSharp, IoPlaySkipForward} from "react-icons/io5";

import {FaLinkedin, FaPlay} from "react-icons/fa";
import {ProgressBar} from "./ProgressBar"

export const ContactBar = () => {
  const SMALL = 640;
  const screenSmall = window.screen.width <= SMALL
  const IconSize = screenSmall ? 40 : 50;
  return (
    <div className = "fixed bottom-0 bg-[#4f5b61] min-h-20 max-h-20 py-3 min-w-screen flex
      flex-row gap-5 items-align items-center z-0 md:px-10 px-5 place-content-between">
    
    <div className = "flex flex-row gap-4 items-center w-full">
      <IoPlaySkipBackSharp size= {IconSize} color = {'white'}/>
      <FaPlay size= {IconSize - 10} color = {'white'}/>
      <IoPlaySkipForward size = {IconSize} color = {'white'}/>
      <div className = "hidden md:inline w-full pl-5">
        <ProgressBar/>
      </div> 
    </div>




    <div className = "flex flex-row gap-4">
      
      <a href="mailto:riz3ndrr@gmail.com" className ="hover:-translate-y-1 transition">
        <IoMailOutline size = {IconSize} color = {"white"} className=""/>
      </a>

      <a href="" className ="hover:-translate-y-1 transition">
        <FaLinkedin size = {IconSize} color = {"white"}/>
      </a>
    </div>
    </div> 
  )
}
