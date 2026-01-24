
const Education = () => {
  return (
      <div className = "flex items-center flex-col">
        <h2 className = "text-white font-mono text-2xl px-3 md:w-full  md:text-4xl border-b-2 mb-5 border-white">Education</h2>
          <div>
            <h1 className = "text-white font-mono text-xl md:text-3xl">Whitireia & WeiTec</h1>
            <h2 className = "text-white font-mono text-lg md:text-2xl">Diploma in Screen Production</h2>
            <h2 className = "text-white font-mono text-lg md:text-2xl">2025</h2>
          </div>
          <div>
            <h1 className = "text-white font-mono text-xl md:text-3xl">Waiuku College</h1>
            <h2 className = "text-white font-mono text-lg md:text-2xl">2017 - 2021</h2>
          </div>
      </div>
  )
}


export const About = () => {
  return (
    <div className = "h-auto w-full bg-[#2b3033] flex flex-col text-center items-center pt-5 md:py-40 gap-10">
      <p className = "text-white text-lg md:text-2xl md:w-[50%] w-[90%]">
        Kia Ora! I'm a recent film graduate based in Wellington and specialise in post-production editing.
        I'm passionate about bringing footage to life and creating a story through the means of editing.

      </p>

      <Education/> 
      <Skills/>
    </div>
  )
}


const Skills = () => {
  const skills = ["Premiere Pro", "Photoshop", "AVID", "After Effects"]
  return (
      <div className = "flex  flex-col">
        <h2 className = "text-white font-mono text-2xl px-3 md:w-full  md:text-4xl border-b-2 mb-5 border-white">Skills</h2>
        <div className = "flex flex-col sm:flex-row sm:flex-wrap  items-start gap-3 px-10">
          {

            skills.map((skill, index) => {
              return (
                <div key = {index} className = "text-white font-mono text-xl rounded-xl">
                  <span className="sm:hidden mr-4">•</span>{skill}{index != skills.length - 1 && ","}
                </div>
              )
            })
        }
        </div>
      </div>
  )
}

