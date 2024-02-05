import React, {useRef, useState,useCallback } from 'react'
import { Link } from 'react-router-dom'
export default function TopMenu() {
    const [activeForYou, setActiveForYou] = useState(true)
    const [activeFollowing, setActiveFollowing] = useState(false)
    let statefy=useRef(null);
    let statef=useRef(null);
    let fy=useRef(null);
    let f=useRef(null);
    
    const handleStateFY=useCallback(()=>{
        fy.current.style.color="white"
        f.current.style.color="#2e2d2d"
        statefy.current.style.opacity="1.0"
        statef.current.style.opacity="0"
        setActiveForYou(true);
        setActiveFollowing(false);
    })

    const handleStateF=useCallback(()=>{
        fy.current.style.color="#2e2d2d"
        f.current.style.color="white"
        statefy.current.style.opacity="0"
        statef.current.style.opacity="1.0"
        setActiveForYou(false)
        setActiveFollowing(true)
    })
  return (
    <div className='grid grid-cols-11 bg-black opacity-80 text-white bg-fixed border-[1px] border-[#2e2d2d] '>
        {/* for you */}
        <div className='col-span-5 p-8px transition delay-[0.1s] hover:bg-[#141414]' onClick={handleStateFY}>
        <Link className='w-[100%] flex flex-col items-center '>
            <div className='w-auto inline-block text-sm m-4' ref={fy}>
                For You
            </div>
            <div className='bg-[#1ea5ff] w-14 h-1 rounded' ref={statefy}></div>
        </Link>
        </div>

        {/* following */}
        <div className='col-span-5 p-8px transition-bg delay-[0.1s] hover:bg-[#141414]' onClick={handleStateF} >
        <Link className='w-[100%] flex flex-col items-center '>
            <div className='w-auto inline-block text-sm m-4 text-[#2e2d2d]' ref={f}>
                Following
            </div>
            <div className='bg-[#1ea5ff] w-14 h-1 rounded opacity-0' ref={statef}></div>
        </Link>
        </div>

        {/* setting */}
        <div className='col-span-1 flex flex-col items-center'>
            <div className='w-auto inline-block m-2 p-2 rounded-full 
            
            
            
            
            
            
            '>
                <Link to={"#settings"}>
                    <img src="../images/setting.png" width={20} height={20} alt="settings image icon"/>
                </Link>

            </div>
        </div>

    </div>
  )
}
