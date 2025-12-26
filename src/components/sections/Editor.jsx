import {useState, useEffect, useRef} from "react";
import { PiCursorClick, PiCursor } from "react-icons/pi";
import { FaRegHandPointer } from "react-icons/fa6";
import { RiArrowGoBackFill, RiArrowGoForwardFill } from "react-icons/ri";
import { IoMailOutline, IoPerson} from "react-icons/io5";
import { FaPlay, FaStop, FaLinkedin, FaFileAlt, FaEye, FaPencilAlt, FaHome, FaFilm  } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import {Projects} from "./Projects"

import {Homepage} from './Homepage'
import {About} from './About'

import emailjs from '@emailjs/browser';

export const Editor = ({page, setPage}) => {

  const lookup = {"Home" : Homepage, "About" : About, "Projects" : Projects}
  const PageToDisplay = lookup[page]


  return (
    <div className = {` bg-[#4c575c]`}>
      <EditorHeader setPage = {setPage} page = {page}/>
      <div className = "flex flex-row h-screen">
        

        <PageToDisplay setPage = {setPage}/>

      </div> 
    </div>
  )
}


const NavBar = ({setPage, page}) => {
  return (
    <div className = "flex flex-row pl-10 py-2 gap-5 text-white font-mono text-2xl items-center">
      <Option Icon = {FaHome} name ="Home" isBig = {true} onClick={() => setPage("Home")} current = {page == "Home" ? true : false}/>
      <Option Icon = {IoPerson} name ="About Me" isBig = {true} onClick={() => setPage("About")} current = {page == "About" ? true : false}/>
      <Option Icon = {FaFilm} name ="Projects" isBig = {true} onClick={() => setPage("Projects")} current = {page == "Projects" ? true : false}/>
    </div>
  )
}

const Option = ({Icon, name, isBig, onClick, current}) => {
  const iconSize = isBig ? 29 : 23
  const textSize = isBig ? "text-2xl" : "text-xl" 
  const bg = current ? "bg-blue-500" : ""

  return (
    <div className = {`flex flex-row gap-2 hover:bg-gray-700 transition cursor-pointer p-2 rounded-lg ${bg}`} onClick = {onClick}>
      <Icon size={iconSize} color={"white"}/>
      <h1 className = {`${textSize} text-white`}>{name}</h1>
    </div>
  )
}

const VideoOption = ({Icon, name}) => {
  return (
    <div className = "flex flex-row gap-2  p-2 rounded-lg">
      <Icon size={23} color={"white"}/>
      <h1 className = "text-xl text-white">{name}</h1>
    </div>
  )
}

const OptionsBar = () => {
  return (
  <div className = "flex flex-row pl-10 py-2 gap-4">
    <VideoOption Icon = {FaFileAlt} name = {"File"}/>
    <VideoOption Icon = {FaEye} name = {"View"}/>
    <VideoOption Icon = {FaPencilAlt} name = {"Edit"}/>
    <VideoOption Icon = {HiOutlineQuestionMarkCircle} name = {"Help"}/>
  </div>
  )
}

const EditorHeader = ({setPage, page}) => {
  return (
    <div className = "flex flex-col">
      
      <div className = "flex flex-row bg-grey-700 border-b-1 border-gray-500">
        <OptionsBar/>
        <div className = " w-full  py-3">
          <h1 className = "font-mono text-white text-2xl text-center  pr-90">Editing portfolio.mp4</h1>
        </div>
      </div>

      <NavBar setPage = {setPage} page = {page}/>  
    </div>

  )
}







