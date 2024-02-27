import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Signup.css"
function Logout() {

    useEffect(()=>{
        document.title="X. It's what happening / X"
    })
    return <div className="bg-black ">
        <div className="frontPage flex flex-col sm:flex sm:flex-row sm:items-start">
            <div className="logo h-20 w-20 p-5 sm:h-[100vh] sm:w-auto flex justify-center items-center sm:p-0">
                <img src="../images/bigX.svg" alt="X logo" className="w-20 h-20 sm:w-[630px] sm:h-[340px]" />
            </div>
            <div className="h-auto option p-5  sm:ml-12 sm:h-[100vh] flex justify-center items-center">
                <div>
                    <h1 className="my-7 text-[45px] text-white text-6xl sm:font-extrabold sm:text-[60px] sm:my-16">Happening now</h1>
                    <h3 className="my-3 text-white text-2xl font-extrabold sm:my-8 " >Join Today</h3>
                    <div className="buttons text-white">
                        <Link>
                            <div className="google w-[100%] sm:w-[60%] bg-white rounded-full inline-block text-center text-black p-2 my-1">
                                Signup with google
                            </div>
                        </Link>
                        <br />
                        <Link>
                            <div className="apple w-[100%] sm:w-[60%] bg-white rounded-full  inline-block text-black p-2  my-1">
                                <div className="flex justify-center items-center" >
                                    <img src="../images/apple.svg" alt="apple logo" />
                                    <span>Signup with apple</span>
                                </div>
                            </div>
                        </Link>
                        <div className="or w-[100%] sm:w-[60%] flex items-center  my-2">
                            <div className="h-[1px] w-[45%] bg-[#2e2d2d]"></div>
                            <div className="mx-1">
                                or
                            </div>
                            <div className="h-[1px] w-[45%] bg-[#2e2d2d]"></div>
                        </div>
                        <Link>
                            <div className="createNew w-[100%] sm:w-[60%] bg-[#1d9bf0] rounded-full inline-block text-white font-bold text-center p-2  my-1">
                                Create account
                            </div>
                        </Link>
                        <div className="description w-[100%] sm:w-[60%]">
                            <h6 className="text-[12px]" >By signing up, you agree to the <Link className="text-[#1d9bf0]">Terms of Service</Link> and <Link className="text-[#1d9bf0]"> Privacy Policy</Link>, including <Link className="text-[#1d9bf0]">Cookie Use</Link>.</h6>
                        </div>
                        <div className="login mt-8 mb-4">

                            <h3 className="text-bold">Already have an account?</h3>
                            <Link to={"/signup"}>
                                <div className="signin w-[100%] sm:w-[60%] bg-black rounded-full inline-block my-3 text-center p-2  border-[2px] border-[#2e2d2d] transition delay-[0.1s] hover:bg-[#141414]">
                                    Signup
                                </div>
                            </Link>
                        </div>
    
                    </div>

                </div>
            </div>

        </div>
        <div className="description flex flex-wrap space-y-2 space-x-4 sm:w-[90%] sm:mx-auto text-[#616d76] text-[12px] sm:mt-3 ">
                            <Link></Link>
                            <Link>About</Link>
                            <Link>Download the X app</Link>
                            <Link>Help Center</Link>
                            <Link>Terms of Service</Link>
                            <Link>Privacy Policy</Link>
                            <Link>Cookie Policy</Link>
                            <Link>Accessibility</Link>
                            <Link>Ads info</Link>
                            <Link>Blog</Link>
                            <Link>Status</Link>
                            <Link>Careers</Link>
                            <Link>Brand Resources</Link>
                            <Link>Advertising</Link>
                            <Link>Marketing</Link>
                            <Link>X for Business</Link>
                            <Link>Developers</Link>
                            <Link>Directory</Link>
                            <Link>Settings</Link>
                            <Link>© 2024 X Corp.</Link>
                        </div>
    </div>
}

export default Logout
