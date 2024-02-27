import React, { useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logout from "./Logout";
import "./Signup.css"
import { useEffect } from "react";
function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const root=useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(()=>{
    const ele=document.getElementById('root')
    document.title="Log in to X / X"
    if(isModalOpen){
      ele.style.overflow='hidden'
      ele.style.position="fixed"
    }

    return(()=>{
      ele.style.overflow='unset'
      ele.style.position='relative'
    } )
  })
  return <div className="h-full" ref={root} id="root">
    {/* <Modal isOpen={isModalOpen} onClose={closeModal}/> */}
    <MyModal />

    <Logout />
  </div>
}
function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return <div>
    <div className="MyModalBg fixed flex items-center justify-center w-[100vh] h-[100vh] bg-[rgba(228, 190, 209, 0.5)]">
      <div className="relative w-auto max-w-lg mx-auto my-6">
        {/* Modal content izz here*/}
        <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* header is here */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-3xl font-semibold">Modal Title</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
            </button>
          </div>
          {/* Body */}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-gray-600 text-lg leading-relaxed">Modal Content</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function MyModal() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/logout")
  }
  return (
    <div className="mainContainer fixed h-screen min-w-[80%] sm:w-[100vw] sm:h-[100vh]  z-1 overflow-hidden flex flex-items-center justify-center">
      <div className="modalStart relative w-[100vw] h-full sm:w-[556px] sm:h-[630px] m-auto sm:rounded-2xl">
        <div className="topBar grid grid-cols-3">
          <div className="close col-span-1">
            <label htmlFor="closeBtn" style={{ cursor: "pointer" }} className="m-2 p-3  w-auto inline-block  rounded-full">
              <img src="../images/close.svg" alt="close" className="w-3 h-3" />
            </label>
            <input type="button" id="closeBtn" style={{ display: "none" }} accept="image/*" onClick={() => handleClick()} />
          </div>
          <div className="icon col-span-1 m-auto ">
            <img src="../images/x.png" className="h-10 w-10" />
          </div>
        </div>

        <div className="contentArea sm:py-5 h-[100vh] sm:h-min  w-full flex justify-center items-center sm:items-start">
          <div className="subContent flex flex-col items-center mx-auto w-[70%]">

          {/* signup with apple element */}
          <p className="text-white font-bold text-2xl py-3 my-2 w-[100%] sm:w-[80%]">Sign in to X</p>


          <div className="google w-[100%] sm:w-[80%] bg-white mb-4 rounded-full mt-1 inline-block text-black p-2 cursor-pointer ">
            <div className="flex justify-center items-center" >
              <img src="../images/emoji.svg" alt="apple logo" />
              <span>Signup with Google</span>
            </div>
          </div>

          <div className="apple w-[100%] sm:w-[80%] bg-white rounded-full mb-1 mt-4 inline-block text-black p-2 cursor-pointer ">
            <div className="flex justify-center items-center" >
              <img src="../images/apple.svg" alt="apple logo" />
              <span>Signup with apple</span>
            </div>
          </div>

          {/* or element */}
          <div className="or w-[100%] sm:w-[60%] flex items-center  my-2 text-white">
            <div className="h-[1px] w-[45%] bg-[#2e2d2d]"></div>
            <div className="mx-1">
              or
            </div>
            <div className="h-[1px] w-[45%] bg-[#2e2d2d]"></div>
          </div>

          {/* input field */}
          <div className="relative z-0 w-[100%] sm:w-[80%] mb-5 ">
            <input type="email" name="floating_email" id="floating_email" className="block h-14 rounded-sm  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 pl-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute  text-sm text-gray-500  mx-2.5 mt-0.5 mb-1 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Email or username</label>
          </div>


          {/* next Button */}
          <div className="apple w-[100%] sm:w-[80%] bg-white rounded-full my-2 inline-block text-black p-2 cursor-pointer ">
            <div className="flex justify-center items-center" >
              <span>Next</span>
            </div>
          </div>

           {/* next Button */}
           <div className="apple w-[100%] sm:w-[80%] bg-black border border-white-[1px] rounded-full mb-2 mt-4 inline-block text-white p-2 cursor-pointer ">
            <div className="flex justify-center items-center" >
              <span>Forgot password?</span>
            </div>
          </div>
          <div className="info w-[100%] sm:w-[80%] mb-3 mt-12 sm:mx-auto text-[#616d76] text-[14px] ">
            Dont have Account? <span className="text-[14px] text-[#0758cf]">Sign up</span>
          </div>

          </div>
        </div>


        <div className="endBar row-span-2">ji</div>

      </div>
    </div>
  )
}
export default Signup