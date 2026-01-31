import {useState} from "react"
import { IoIosInformationCircleOutline } from "react-icons/io";

export const Projects = () => {
  const [displayProject, setDisplayProject] = useState(0)
  const projects = [{header : "Price of Heaven", desc : "Film Project", role : "Lead Editor & Sound Designer", link : "https://www.youtube.com/embed/N21Qxv34cas?si=WNnUpkvY_LZVyZ_G" },
                    {header : "Wellington Speedcubing", desc : "Documentary", role : "Director & Lead Editor", link : "https://www.youtube.com/embed/vtuiqkSTWs0?si=aAelF15unqxBT1xN" },
                    {header : "DARTZ - Bathsalts", desc : "Music Video", role : "Director & Lead Editor", link : "https://www.youtube.com/embed/UBFEcIIUd4k?si=RKiCdAnJoY7UlnYb"} ]
  const proj = projects[displayProject]
  const isMobile = window.innerWidth <= 640 ? true : false;

  return (
    <div className = "w-screen relative pb-50">
      {!isMobile && 
        
        <div className="flex flex-row w-screen h-full">
          <div className="flex xl:flex-row xl:flex-row-reverse flex-col">
            <ProjectVideo link ={proj.link}/>
            <FilesNavBar setDisplayProject = {setDisplayProject}/>
          </div>
          
          <ProjectInfo header = {proj.header} desc = {proj.desc} role = {proj.role}/>
        </div>
      }

      {isMobile &&
        <div className = "relative flex flex-col  bg-[#394145] w-full overflow-y-scroll h-full">
          {
          projects.map(({header, desc, role, link}) => {
            return (
              <div key={header} className="text-white rounded-md bg-[#283338] py-5 m-2">
                
                <h1 className = "text-2xl pl-5">{header}</h1>
                <h2 className = "text-lg pl-5">{desc}</h2>
                <ProjectVideo link ={link}/>
                <h2 className = "text-lg pt-3 text-center">{role}</h2>
              </div> 
            )
          })
          }
        </div>


      }
    </div>

  )
}

const ProjectVideo = ({link}) => {
  return (

      <iframe
        className ="md:w-[70vw] w-[90vw] h-[30vh] m-auto md:h-full grow-3"
        src={link}

      />


  )
}


const ProjectInfo = ({header, desc, role}) => {
  return (
    <div className="bg-[#3b4347] w-sm animate-slide-left border-l-2 border-gray-900">
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
    <div className="bg-[#3b4347] w-full xl:w-3xs  animate-slide-right md:inline hidden h-3xs">
      
      <h1 className ="pl-10 pt-10 font-mono text-white text-2xl xl:text-4xl">Media</h1>  
      <div className = "xl:p-10 pb-10 pl-10 flex gap-3 flex-col lg:flex-row xl:flex-wrap">
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

