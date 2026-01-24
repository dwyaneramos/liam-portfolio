
import { IoMailOutline, IoPerson} from "react-icons/io5";
import { FaPlay, FaStop, FaLinkedin, FaFileAlt, FaEye, FaPencilAlt, FaHome, FaFilm  } from "react-icons/fa";
export const NavBar = ({setPage, page}) => {
  return (
    <div className = "flex flex-row md:pl-10 py-2  gap-1 md:gap-2 md:gap-5 text-white font-mono items-center justify-center md:justify-start">
      <Option Icon = {FaHome} name ="Home"  onClick={() => setPage("Home")} current = {page == "Home" ? true : false}/>
      <Option Icon = {IoPerson} name ="About Me"  onClick={() => setPage("About")} current = {page == "About" ? true : false}/>
      <Option Icon = {FaFilm} name ="Projects"  onClick={() => setPage("Projects")} current = {page == "Projects" ? true : false}/>
    </div>
  )
}

const Option = ({Icon, name, onClick, current}) => {
  const bg = current ? "bg-blue-400" : ""
  const iconSize = 27

  return (
    <div className = {`flex flex-row gap-2 hover:bg-gray-700 transition cursor-pointer p-2 rounded-lg ${bg}`} onClick = {onClick}>
      <Icon size={iconSize} color={"white"}/>
      <h1 className = {"text-white text-md md:text-xl"}>{name}</h1>
    </div>
  )
}
