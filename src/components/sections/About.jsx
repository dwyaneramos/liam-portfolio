

export const About = () => {
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


