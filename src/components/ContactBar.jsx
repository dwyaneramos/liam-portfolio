

import { IoMailOutline} from "react-icons/io5";

import {FaLinkedin} from "react-icons/fa";

export const ContactBar = () => {
  const IconSize = 50;
  return (
    <div className = "absolute bottom-0 bg-[#4f5b61] min-h-20 max-h-20 py-3 min-w-screen flex
      flex-row gap-5 items-align items-center z-0">

    <a href="mailto:riz3ndrr@gmail.com" className ="hover:-translate-y-1 transition">
      <IoMailOutline size = {IconSize} color = {"white"} className="ml-10"/>
    </a>

    <a href="" className ="hover:-translate-y-1 transition">
      <FaLinkedin size = {IconSize} color = {"white"}/>
    </a>
    </div> 
  )
}
