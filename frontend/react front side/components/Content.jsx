import React from "react";
import { Link } from 'react-router-dom';
import "./Content.css"
import img1 from  "../images/dummyProfile.webp"
function Content(){
    return <div className="content">
        <div className="profileArea grid grid-cols-10">

            <div className="profile col-span-1 m-auto mt-2">
                <img src={img1} alt="Profile Pic" height={38} width={38}/>
            </div>
            <div className="inputs col-span-9">
                {/* <input type="text" placeholder="What is happening?" className="bg-black text-white"/> */}
                <input type="text" placeholder="What is happening?" className="w-full p-3 text-lg bg-black text-white rounded-lg focus:border-none outline-none"/>
                <div className="commentType">
                    <Link>
                        <div className="text-sm text-[#1d9bf0] rounded-full transition-[0.5s] w-auth inline-block px-2 py-1 hover:bg-[#031018] ">Every One Can Reply</div>
                    </Link>
                    <div className="line my-2">
                    </div>
                    <div className="postButton bg-[#1d9bf0] text-white rounded-full w-auto inline-block px-4 py-2">
                    <Link>
                        Post
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        <h1 className="">this is content</h1>
    </div>
}

export default Content