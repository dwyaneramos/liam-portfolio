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

const Homepage = () => {
  return (
    <div className = "flex flex-col  text-center pt-10  w-full bg-blue-600">
      <h1 className = "font-mono text-white text-4xl">
        Kia Ora! I'm Liam
      </h1>

      <h2 className = "font-mono text-white text-3xl" >
        Welcome to my Film Portfolio
      </h2>
    </div>
  )
}
const About = () => {
  return (
    <div className = "h-auto w-full bg-blue-600">
      Saboutnsdfsdf
    </div>
  )
}
const Projects = () => {
  return (
    <div className = "flex flex-col items-center text-center pt-10 px-5 w-full bg-blue-600">
      <h1 className = "font-mono text-white text-4xl">
        Projects
      </h1>

      <h2 className = "font-mono text-white text-3xl" >
        lorem
      </h2>

      <div className = "flex flex-col md:flex-row gap-5 justify-center flex-wrap">
        <Project/>
        <Project/>
        <Project/>
      </div>


    </div>
  )
}

const Project = () => {
  return (
    <div className ="w-100 py-20 bg-red-600 flex flex-start flex-col rounded-xl hover:-translate-y-1 transition">
      <h1 className ="font-mono text-white text-4xl">Random Film Project</h1>
      <h2 className = "font-mono text-white text-3xl">A story about something</h2>
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



const Editor = ({showEditor}) => {
  useEffect(() => {
    if (showEditor) {
      console.log("YSAY");
    }
  }, [showEditor])

  const [page, setPage] = useState("Home")
  const lookup = {"Home" : Homepage, "About" : About, "Projects" : Projects}
  const PageToDisplay = lookup[page]


  return (
    <div className = {`overflow-hidden max-h-0 bg-red-400 ${showEditor ? "animate-display-editor" : ""}`}>
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

const Toolbar = ({showEditor}) => {

  const EditIconSize = 55;
  return (
    <div className = {`absolute top-0 bg-[#4f5b61] min-h-20 max-h-20 py-3 min-w-screen flex
          flex-row gap-10 items-align items-center z-0
          ${showEditor ? "animate-move-toolbar" : ""}`}>
      <RiArrowGoBackFill size = {EditIconSize} color = {"white"} className="ml-10"/>
      <RiArrowGoForwardFill size = {EditIconSize} color = {"white"}/>
      <FaPlay size = {EditIconSize} color = {"white"}/>
      <FaStop size = {EditIconSize} color = {"white"}/>
      
    </div>
  )
}


const Cursor = ({stageNum}) => {

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

const Timeline = ({setShowEditor, stageNum}) => {
  
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
