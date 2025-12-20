import {useState, useEffect} from "react";
import { PiCursorClick, PiCursor } from "react-icons/pi";
import { FaRegHandPointer } from "react-icons/fa6";
import { RiArrowGoBackFill, RiArrowGoForwardFill } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { FaPlay, FaStop, FaLinkedin  } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";




const Homepage = () => {
  return (
    <div className = "flex flex-col  text-center pt-10  w-full bg-blue-400">
      <h1 className = "font-mono text-white text-4xl">
        Kia Ora! I'm Liam
      </h1>
      <h2 className = "font-mono text-white text-3xl">An Editing and Post-Production Specialist</h2>

      <h2 className = "font-mono text-white text-3xl" >
        Welcome to my Film Portfolio
      </h2>
    </div>
  )
}
const About = () => {
  return (
    <div className = "h-auto w-full bg-blue-400 flex flex-col text-center items-center">
      <h1 className = "text-white font-mono text-4xl">About me</h1>
      <h2 className = "text-white font-mono text-4xl">Education</h2>
        <div>
          <h1 className = "text-white font-mono text-3xl">Whitireia & WeiTec</h1>
          <h2 className = "text-white font-mono text-2xl">Diploma in Screen Production</h2>
          <h2 className = "text-white font-mono text-2xl">Jan 2020 - Jan 2023</h2>
        </div>
        <div>
          <h1 className = "text-white font-mono text-3xl">High School</h1>
          <h2 className = "text-white font-mono text-2xl">Jan 2020 - Jan 2023</h2>
        </div>
    </div>
  )
}
const Projects = () => {
  return (
    <div className = "flex flex-col items-center text-center pt-10 px-5 w-full bg-blue-400">
      <h1 className = "font-mono text-white text-4xl">
        Projects
      </h1>

      <h2 className = "font-mono text-white text-3xl" >
        lorem
      </h2>

      <div className = "flex flex-col md:flex-row gap-5 justify-center flex-wrap">
        <Project header = "Price of Heaven" desc = "Film Project" role = "Lead Editor & Sound Designer"/>
        <Project header = "Wellington Speedcubing" desc = "Documentary" role = "Director & Lead Editor"/>
        <Project header = "DARTZ - Bathsalts" desc = "Music Video" role = "Director & Lead Editor"/>
      </div>


    </div>
  )
}

const Project = ({header, desc, role}) => {
  return (
    <div className ="w-md py-20 bg-red-600 flex flex-start flex-col rounded-xl hover:-translate-y-1 transition">
      <h1 className ="font-mono text-white text-3xl">{header}</h1>
      <h2 className = "font-mono text-white text-2xl">{desc}</h2>
      <h2 className = "font-mono text-white text-xl">{role}</h2>
      <iframe
        className ="w-[90%] m-auto h-full"
        src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
      />

    </div>
  )
}



export const Editor = ({showEditor}) => {
  useEffect(() => {
    if (showEditor) {
      console.log("YSAY");
    }
  }, [showEditor])

  const [page, setPage] = useState("Home")
  const lookup = {"Home" : Homepage, "About" : About, "Projects" : Projects}
  const PageToDisplay = lookup[page]


  return (
    <div className = {`overflow-hidden max-h-0 bg-[#4c575c] ${showEditor ? "animate-display-editor" : ""}`}>
      <EditorHeader/>
      <div className = "flex flex-row">
         
        <FilesNavBar setPage = {setPage}/>
        <PageToDisplay/>

      </div> 
    </div>
  )
}

const EditorHeader = () => {
  return (
    <div className = "bg-[#3b4347] w-screen py-3">
      <h1 className = "font-mono text-white text-2xl text-center">Editing portfolio.mp4</h1>
    </div>
  )
}

const FilesNavBar = ({setPage}) => {
  return (
    <div className="bg-[#3b4347] w-2xs">
      
      <h1 className ="pl-10 pt-10 font-mono text-white text-4xl">Media</h1>  
      <div className = "p-10 flex flex-wrap gap-3 flex-col  min-h-screen">
        <File header = "Home" onClick={() => setPage("Home")}/>  
        <File header = "About" onClick={() => setPage("About")}/>  
        <File header = "Projects" onClick={() => setPage("Projects")}/>  
      </div>
    </div>
  )
}

const File = ({header, onClick}) => {
  return (
    <div className = "hover:-translate-y-1 transition h-30 w-50 bg-blue-400 flex items-end" onClick = {onClick}>
      <h1 className = "mx-auto">{header}.mp4</h1>
    </div>
  )
}

export const Toolbar = ({showEditor}) => {

  const EditIconSize = 55;
  const [changeIcon, setChangeIcon] = useState(false);
  useEffect(() => {
    if (showEditor) {
      const timer = setTimeout(() => {
        setChangeIcon(true);
      }, 1500);



    } else {
      setChangeIcon(false);
      return;
    }

    return () => clearTimeout(timer)

    }, [showEditor])

  const Icon1 = changeIcon == true ? FaLinkedin : RiArrowGoBackFill;
  const Icon2 = changeIcon == true ? IoMailOutline : RiArrowGoForwardFill;
  const Icon3 = changeIcon == true ? BsFillTelephoneFill : FaPlay;
  const Icon4 = changeIcon == true ? FaPlay : FaStop;

  

  return (
    <div className = {`absolute top-0 bg-[#4f5b61] min-h-20 max-h-20 py-3 min-w-screen flex
          flex-row gap-10 items-align items-center z-0
          ${showEditor ? "animate-move-toolbar" : ""}`}>

      <Icon1 size = {EditIconSize} color = {"white"} className="ml-10"/>
      <Icon2 size = {EditIconSize} color = {"white"}/>
      <Icon3 size = {EditIconSize} color = {"white"}/>
      <Icon4 size = {EditIconSize} color = {"white"}/>
      
    </div>
  )
}


export const Cursor = ({stageNum}) => {

  const animationStages = {
    1 : {icon : PiCursor        , iconClasses : " animate-cursor-1"},
    2 : {icon : FaRegHandPointer, iconClasses : " animate-cursor-2"},
    3 : {icon : PiCursor        , iconClasses : " animate-cursor-3" },
    4 : {icon : FaRegHandPointer, iconClasses : "top-[35%] translate-x-70 animate-cursor-1"}  ,
    5 : {icon : PiCursor,         iconClasses : "top-[35%] translate-x-70 animate-cursor-4"}, 
    6 : {icon : PiCursor,         iconClasses : "top-[35%] translate-x-70 animate-cursor-5"}  
  }

  const CurrentIcon = animationStages[stageNum].icon
  const CurrentClasses = animationStages[stageNum].iconClasses
  
  return (
    <div className = {`absolute right-[45%] top-[15%] z-10 ${CurrentClasses}`}>
      <CurrentIcon size = {90} color = {"white"}/>
    </div>


      )

}

export const Timeline = ({setShowEditor, stageNum}) => {
  
  const animationStages = {
    1 : {icon : PiCursor        , iconClasses : " -translate-x-100 translate-y-10 animate-cursor-1", titleAnimation : "", subtitleAnimation : "" },
    2 : {icon : FaRegHandPointer, iconClasses : " -translate-x-105 translate-y-10 animate-cursor-2" , titleAnimation : "animate-resize", subtitleAnimation : ""},
    3 : {icon : PiCursor        , iconClasses : "-translate-x-20 translate-y-10 animate-cursor-3", titleAnimation : "animate-resize", subtitleAnimation : ""},
    4 : {icon : FaRegHandPointer, iconClasses : "-translate-x-30 translate-y-40 animate-cursor-1", titleAnimation : "animate-resize", subtitleAnimation : "animate-subtitle-resize"},
    5 : {icon : PiCursor,         iconClasses : "-translate-x-30 translate-y-40 animate-cursor-4", titleAnimation : "animate-resize", subtitleAnimation : "animate-subtitle-resize"},
    6 : {icon : PiCursor,         iconClasses : "-translate-x-30 translate-y-40 animate-cursor-4", titleAnimation : "animate-resize", subtitleAnimation : "animate-subtitle-resize"},
  }


  const TitleAnimation = animationStages[stageNum].titleAnimation
  const SubtitleAnimation = animationStages[stageNum].subtitleAnimation

  return (
    <section className = "h-screen overflow-hidden mt-20">
      <div className = "relative flex h-screen flex-col   justify-start gap-0 ">

          
          {/*Name Clip*/}
          <div className = "pl-20 py-5 min-h-40 flex flex-row items-center justify-center">
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
          
            
          
          </div>

        
          {/*Title Clip*/}
          <div className = "pl-10 min-h-30 pb-5 flex flex-row items-center justify-center">
            <div className = "flex flex-col ">
              <h2 className ={`bg-[#844496] rounded-t-xl font-mono text-white text-2xl pl-2 pt-2 translate-x-[100vw] ${SubtitleAnimation}`}>What I am:</h2>
              <h2 className = {`z-0 translate-x-[100vw] bg-[#a655bd] py-4 px-5 text-6xl rounded-b-xl text-white font-mono font-bold ${SubtitleAnimation}`}>Film Freelancer</h2>
            </div>
          </div>

        
      </div> 


    </section>
  )
}
