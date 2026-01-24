
import { useState, useEffect } from "react";

export const Timer = ({currTime, suffix, timeStyling}) => {
  let [hr, min, ss] = currTime.split(":")
  if (suffix == "pm") {
    hr = parseInt(hr) + 12
  }
  return (
    <div className = {timeStyling}>{hr}:{min}:{ss}</div>
  )

}

export const ProgressBar = () => {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [])

  
  const [ currTime, suffix ] = time.split(" ")
  const timeStyling = "border-2 border-gray-600 bg-gray-500 p-2 text-2xl text-white"
  

  return (
    <div className = "flex flex-row w-[70%] xl:w-[50%] items-center gap-3">
      <Timer currTime = {currTime} suffix = {suffix} timeStyling = {timeStyling}/>
      <Bar currTime = {currTime} suffix = {suffix}/>
      <div className = {timeStyling}>24:00:00</div>
    </div>
  )
}

const Bar = ({currTime, suffix}) => {
    const timeSplits = currTime.split(":")
    let secElapsed = parseInt(timeSplits[0]) * 60 * 60 + parseInt(timeSplits[1] ) * 60 + parseInt(timeSplits[2]) 
    const numHrsInDay = 24 * 60 * 60 
    if (suffix == "pm") {
      secElapsed += 12 * 60 * 60
    }
    const progress = secElapsed / numHrsInDay * 100
    return (
      <div className="w-full relative h-full overflow-visible flex items-center">
        <div className = "bg-blue-400 rounded-l-xl h-5 absolute z-1"
        style={{ width: `${progress}%` }}>
          
        </div>
        
          
        <div className = "absolute bg-gray-300 w-2 z-2 h-10"
          style={{ left: `${progress - 0.5}%` }}>
        </div>

        <div className = "bg-white rounded-xl w-full h-5">
        </div>
      </div>
    )
}
