
import { IoMailOutline, IoPerson} from "react-icons/io5";
import { FaPlay, FaStop, FaLinkedin, FaFileAlt, FaEye, FaPencilAlt, FaHome, FaFilm  } from "react-icons/fa";
export const NavBar = ({setPage, page}) => {
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
  const bg = current ? "bg-blue-400" : ""

  return (
    <div className = {`flex flex-row gap-2 hover:bg-gray-700 transition cursor-pointer p-2 rounded-lg ${bg}`} onClick = {onClick}>
      <Icon size={iconSize} color={"white"}/>
      <h1 className = {`${textSize} text-white`}>{name}</h1>
    </div>
  )
}
