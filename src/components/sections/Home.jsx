import {useState, useEffect} from "react";
import { PiCursorClick, PiCursor } from "react-icons/pi";
import { FaRegHandPointer } from "react-icons/fa6";
import { RiArrowGoBackFill, RiArrowGoForwardFill } from "react-icons/ri";
import { IoMailOutline, IoPerson} from "react-icons/io5";
import { FaPlay, FaStop, FaLinkedin, FaFileAlt, FaEye, FaPencilAlt, FaHome, FaFilm  } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import {Projects} from "./Projects"
import { GrContact } from "react-icons/gr";




const Homepage = ({setPage}) => {
  return (
    <div className = "flex flex-col items-center text-center pt-10 justify-center pb-70  w-full bg-[#2b3033]">
      <h1 className = "font-mono text-white text-5xl border-b-3 border-white mb-3">
        Liam Wadek  
      </h1>
      <h2 className = "font-mono text-white text-4xl">Editing and Post-Production Specialist</h2>

      <h2 className = "mt-5 font-mono bg-blue-300 py-2 px-5 rounded-xl hover:-translate-y-1 transition cursor-pointer"
          onClick = {() => setPage("Projects")}>
        View Projects <span className ="text-3xl p-0">&#8594;</span>
      </h2>
    </div>
  )
}
const Contact = ({setPage}) => {
  return (
    <div className = "flex flex-col items-center text-center pt-10 justify-center pb-70  w-full bg-[#2b3033]">
      <h1 className = "font-mono text-white text-5xl border-b-3 border-white mb-3">
        Keen To Collaborate?
      </h1>
      <h2 className = "font-mono text-white text-4xl">Editing and Post-Production Specialist</h2>

      <h2 className = "mt-5 font-mono bg-blue-300 py-2 px-5 rounded-xl hover:-translate-y-1 transition cursor-pointer"
          onClick = {() => setPage("Projects")}>
        View Projects <span className ="text-3xl p-0">&#8594;</span>
      </h2>
    </div>
  )
}


const About = () => {
  const skills = ["Premiere Pro", "Photoshop", "AVID", "After Effects"]
  return (
    <div className = "h-auto w-full bg-[#2b3033] flex flex-col text-center items-center py-10 gap-5">
      
      <p className = "text-white text-2xl w-[50%]">
        Kia Ora! I'm a recent film graduate based in Wellington and specialise in post-production editing.
        I'm passionate about bringing footage to life and creating a story through the means of editing.

      </p>
      <>
        <h2 className = "text-white font-mono text-4xl border-b-2 border-white">Education</h2>
          <div>
            <h1 className = "text-white font-mono text-3xl">Whitireia & WeiTec</h1>
            <h2 className = "text-white font-mono text-2xl">Diploma in Screen Production</h2>
            <h2 className = "text-white font-mono text-2xl">2025</h2>
          </div>
          <div>
            <h1 className = "text-white font-mono text-3xl">Waiuku College</h1>
            <h2 className = "text-white font-mono text-2xl">2017 - 2021</h2>
          </div>
      </>

      <div>
        <h2 className = "text-white font-mono text-4xl border-b-2 border-white mb-5">Skills</h2>
        <div className = "flex flex-row flex-wrap gap-3">
          {

            skills.map((skill, index) => {
              return (
                <div key = {index} className = "text-white font-mono bg-blue-500 text-xl p-2 rounded-xl border-2 border-blue-700 hover:-translate-y-1 transition">
                  {skill}
                </div>
              )
            })
        }
        </div>
      </div>
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
  const lookup = {"Home" : Homepage, "About" : About, "Projects" : Projects, "Contact" : Contact}
  const PageToDisplay = lookup[page]


  return (
    <div className = {`overflow-hidden max-h-0 bg-[#4c575c] ${showEditor ? "animate-display-editor" : ""}`}>
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
      <Option Icon = {GrContact} name ="Contact" isBig = {true} onClick={() => setPage("Contact")} current = {page == "Contact" ? true : false}/>
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

const OptionsBar = () => {
  return (
  <div className = "flex flex-row pl-10 pt-3 gap-4">
    <Option Icon = {FaFileAlt} name = {"File"} isBig = {false}/>
    <Option Icon = {FaEye} name = {"View"} isBig = {false}/>
    <Option Icon = {FaPencilAlt} name = {"Edit"} isBig = {false}/>
    <Option Icon = {HiOutlineQuestionMarkCircle} name = {"Help"} isBig = {false}/>
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

  const EditIconSize = 45;
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
        
                <div className = {`bg-[#4fab55] rounded-tr-xl w-0 -ml-3 ${TitleAnimation}`}>
                </div>
              </div>
              <div className = {`flex flex-row justify-start min-w-2xl `}>
                <h1 className = "bg-[#55bd5c] py-4 px-10 rounded-xl text-8xl min-w-xs text-white font-mono font-bold">Welcome</h1>
                <h1 className = {` bg-[#55bd5c] py-4 -ml-5 max-h-md w-0 rounded-xl text-8xl  whitespace-nowrap overflow-hidden text-white font-mono font-bold ${TitleAnimation}`}>to my</h1>
              </div>
            </div>
          
            
          
          </div>

        
          {/*Title Clip*/}
          <div className = "pl-10 min-h-30 pb-5 flex flex-row items-center justify-center">
            <div className = "flex flex-col ">
              <h2 className = {`z-0 translate-x-[100vw] text-nowrap bg-[#a655bd] py-4 px-5 text-8xl rounded-xl text-white font-mono font-bold ${SubtitleAnimation}`}>Portfolio</h2>
            </div>
          </div>

        
      </div> 


    </section>
  )
}
