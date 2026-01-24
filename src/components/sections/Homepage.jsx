

export const Homepage = ({setPage}) => {
  return (
    <div className = "flex flex-col items-center text-center pt-10 justify-center pb-70  w-full bg-[#2b3033]">
      <h1 className = "font-mono text-white text-5xl border-b-3 border-white mb-3">
        Liam Wadek  
      </h1>
      <h2 className = "font-mono text-white text-4xl">Editing and Post-Production Specialist</h2>

      <h2 className = "mt-5 font-mono bg-blue-400 text-white py-2 px-5 rounded-xl hover:-translate-y-1 transition cursor-pointer"
          onClick = {() => setPage("Projects")}>
        View Projects <span className ="text-3xl p-0">&#8594;</span>
      </h2>
    </div>
  )
}
