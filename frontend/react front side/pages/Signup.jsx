import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logout from "./Logout";
import "./Signup.css"
import { useEffect } from "react";
function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return <div>
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
        {/* Modal content */}
        <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header */}
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
    <div className="mainContainer absolute sm:w-[100vw] sm:h-[100vh]  z-1 overflow-hidden flex flex-items-center justify-center">
      <div className="modalStart relative w-[100vw] h-[100vh] sm:max-w-[77%] md:w-[37%] sm:w-[37%] sm:h-[90%] m-auto sm:rounded-2xl">
        <div className="topBar grid grid-cols-3">
          <div className="close col-span-1">
            <label htmlFor="closeBtn" style={{ cursor: "pointer" }} className="m-2 p-3  w-auto inline-block  rounded-full">
              <img src="../images/close.svg" alt="close" className="w-3 h-3" />
            </label>
            <input type="button" id="closeBtn" style={{ display: "none" }} accept="image/*" onClick={() => handleClick()} />
          </div>
          <div className="icon col-span-1 m-auto ">
            <img src="../images/x.png" alt="" srcset="" className=" h-10 w-10" />
          </div>
        </div>

        <div className="contentArea mt-36 sm:mt-25 sm:py-5 m-auto w-[75%] flex flex-col ">
        {/* signup with apple element */}
        <p className="text-white font-bold text-2xl my-4">Sign in to X</p>


          <div className="apple w-[100%] sm:w-[80%] bg-white rounded-full my-2 inline-block text-black p-2 cursor-pointer m-auto">
            <div className="flex justify-center items-center" >
              <img src="../images/apple.svg" alt="apple logo" />
              <span>Signup with apple</span>
            </div>
          </div>

          {/* or element */}
          <div className="or w-[100%] sm:w-[60%] flex items-center  my-2 text-white m-auto">
            <div className="h-[1px] w-[45%] bg-[#2e2d2d]"></div>
            <div className="mx-1">
              or
            </div>
            <div className="h-[1px] w-[45%] bg-[#2e2d2d]"></div>
          </div>

          {/* input field */}
          <div class="relative z-0 w-full mb-5 ">
            <input type="email" name="floating_email" id="floating_email" class="block h-14 rounded-sm  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 pl-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_email" class="peer-focus:font-medium absolute  text-sm text-gray-500  mx-2.5 mt-0.5 mb-1 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Email or username</label>
          </div>


          {/* next Button */}
          <div className="apple w-[100%] sm:w-[80%] bg-white rounded-full my-2 inline-block text-black p-2 cursor-pointer m-auto">
            <div className="flex justify-center items-center" >
              <span>Next</span>
            </div>
          </div>
        </div>


        <div className="endBar row-span-2">ji</div>

      </div>
    </div>
  )
}
export default Signup