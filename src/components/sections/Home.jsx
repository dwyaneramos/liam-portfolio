import { LiaMousePointerSolid } from "react-icons/lia";

export const Home = () => {
  return (
    <section className = "h-screen">
      <div className = "relative flex flex-col items-align h-screen items-center justify-center gap-4 ">

        <div className = "flex flex-row items-end ml-35">
          <div className = "flex flex-row justify-start w-2xl ">
            <h1 className = "bg-[#55bd5c] py-4 px-10 rounded-xl text-8xl text-white font-mono font-bold">Liam</h1>
            <h1 className = "bg-[#55bd5c] py-4 -ml-2 w-0 rounded-r-xl text-8xl overflow-hidden text-white font-mono font-bold animate-resize">Wadek</h1>
          </div>
          <LiaMousePointerSolid size={100} color ={"white"} className = "z-1 -translate-x-105 translate-y-10 animate-cursor-1" />
          
        </div>
          <h2 className = "bg-[#a655bd] py-4 px-5 text-6xl rounded-xl text-white font-mono font-bold">Film Freelancer</h2>
      </div> 

    </section>
  )
}
