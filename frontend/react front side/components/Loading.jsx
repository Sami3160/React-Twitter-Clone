import { useState } from "react"

function Loading(){
    const [online,setOnline]=useState(true)
    
    return <div className="loading bg-black flex justify-center items-center h-[100vh]">
    <div className="text-white">
      <img src="../images/svgexport-5.svg" className="x opacity-20" />
      {online ? <div>loading...</div> : <div>dont worry...</div>}
    </div>
  </div>
}


export default Loading