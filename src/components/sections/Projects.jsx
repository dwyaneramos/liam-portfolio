import {useState} from "react"
import { IoIosInformationCircleOutline } from "react-icons/io";

export const Projects = () => {
  const [displayProject, setDisplayProject] = useState(0)
  const projects = [{header : "Price of Heaven", desc : "Film Project", role : "Lead Editor & Sound Designer", link : "https://www.youtube.com/embed/vtuiqkSTWs0?si=aAelF15unqxBT1xN" },
                    {header : "Wellington Speedcubing", desc : "Documentary", role : "Director & Lead Editor", link : "https://www.youtube.com/embed/vtuiqkSTWs0?si=aAelF15unqxBT1xN" },
                    {header : "DARTZ - Bathsalts", desc : "Music Video", role : "Director & Lead Editor", link : "https://www.youtube.com/embed/UBFEcIIUd4k?si=RKiCdAnJoY7UlnYb"} ]

  const proj = projects[displayProject]

  return (
    <div className="flex flex-row w-screen">
      <FilesNavBar setDisplayProject = {setDisplayProject}/>
      <div className = "pt-3 px-5 w-full bg-gray-900">
          <ProjectVideo link = {proj.link}/>
      </div>
      
      <ProjectInfo header = {proj.header} desc = {proj.desc} role = {proj.role}/>
    </div>

  )
}

const ProjectVideo = ({link}) => {
  return (

      <iframe
        className ="w-[70vw] m-auto h-[80vh]"
        src={link}

      />


  )
}


const ProjectInfo = ({header, desc, role}) => {
  return (
    <div className="bg-[#3b4347] w-sm animate-slide-left">
      <div className = "flex flex-row pt-3 pl-3 gap-2 border-b-1 border-gray-500 pb-2">
        <IoIosInformationCircleOutline size = {25} color = {"white"}/> 
        <h1 className =" font-mono text-white text-xl">Project Info</h1>  
      </div>
      <div className = "pl-5 pt-5 flex flex-wrap gap-3 flex-col  min-h-screen">
        <h1 className ="text-2xl text-gray-300">Title</h1>
        <p className ="text-xl text-white">{header}</p>

        <h1 className ="text-2xl text-gray-300">Description</h1>
        <p className ="text-xl text-white">{desc}</p>

        <h1 className ="text-2xl text-gray-300">Role</h1>
        <p className ="text-xl text-white">{role}</p>        
      </div>
    </div>
  )
}

const FilesNavBar = ({setDisplayProject}) => {
  return (
    <div className="bg-[#3b4347] w-2xs animate-slide-right">
      
      <h1 className ="pl-10 pt-10 font-mono text-white text-4xl">Media</h1>  
      <div className = "p-10 flex flex-wrap gap-3 flex-col  min-h-screen">
        <File header = "Price_Of_Heaven" onClick={() => setDisplayProject(0)}/>  
        <File header = "Speedcubing" onClick={() => setDisplayProject(1)}/>  
        <File header = "Bathsalts" onClick={() => setDisplayProject(2)}/>  
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

