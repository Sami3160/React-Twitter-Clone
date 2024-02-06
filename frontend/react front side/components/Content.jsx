import React,{useEffect, useState} from "react";
import { useRef } from "react";
import { Link } from 'react-router-dom';
import "./Content.css"
import img1 from  "../images/pfp.jpg"
function Content(){
    const [postActive, setPostActive]=useState(false);
    const [content, setContent]=useState("");
    const postButton=useRef(null);
    const postArea=useRef(null);
    const imageShow=useRef(null);
    const [image,setImage]=useState(null)
    function handleFileChange(e){
        setImage(e.target.files[0]);
        setContent(postArea.current.value)
        const invalidCharsRegex = /[^a-zA-Z0-9 .,!?'"]+/;

        if (invalidCharsRegex.test(content)) {
          alert('Invalid characters in tweet content');
          return;
        }
        imageShow.current.src=URL.createObjectURL(e.target.files[0]);
        imageShow.current.style.display="block"
        if(e.target.value!="" || image!=null){ 
            postButton.current.style.backgroundColor="#1d9bf0";
            postButton.current.style.cursor="pointer";  
        }else{
            postButton.current.style.backgroundColor="#0e4d78";
            postButton.current.style.cursor="default";
            return;
            
        }
    
    }

    function onPost() {
        if(content=="" && image==null)return;
        const userId="";
        const data = new FormData();
        data.append('image', image);
        data.append('userId', userId);
        data.append('content',content);
        if(image==null)data.delete('image');

        fetch('http://localhost:3000/', {
            method: 'POST',
            body: data,
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(()=>{
        postArea.current.addEventListener('input',(e)=>{
            if(e.target.value!="" || image!=null){ 
                postButton.current.style.backgroundColor="#1d9bf0";
                postButton.current.style.cursor="pointer";
                setContent(e.target.value)
            }else{
                postButton.current.style.backgroundColor="#0e4d78";
                postButton.current.style.cursor="default";
                
            }
        })
    },[])
    return <div className="content">
        <div className="profileArea grid grid-cols-10">

            <div className="profile col-span-1 m-auto mt-2">
                <img src={img1} alt="Profile Pic" height={38} width={38} className="rounded-full"/>
            </div>
            <div className="inputs col-span-9">
                {/* <input type="text" placeholder="What is happening?" className="bg-black text-white"/> */}
                <input type="text" placeholder="What is happening?" className="w-full p-3 text-lg bg-black text-white rounded-lg focus:border-none outline-none " ref={postArea}/>
                <div className="relative max-h-[300px] mr-2 sm:mr-0 sm:max-h-[350px] overflow-auto rounded-xl  max-w-[300px] sm:max-w-[400px]">
                    {image!=null?<img width={'30px'} height={'30px'} src="../images/close.svg" className="absolute top-2 right-2 bg-black rounded-full p-1 opacity-70" onClick={()=>{imageShow.current.src=""}}/>:""}
                    <img src="" srcSet="" alt=""style={{display:'none'}} ref={imageShow} className=" max-h-[800px] overflow-auto"/>
                </div>
                <div className="commentType">
                    <Link>
                        <div className="text-sm text-[#1d9bf0] rounded-full transition-all ease-in-out delay-[0.1s] w-auth inline-block px-2 py-1 hover:bg-[#031018] ">Every One Can Reply</div>
                    </Link>
                    <div className="line my-2">
                    </div>
                    <div className="postControls grid grid-cols-5">
                        <div className="subControls col-span-4 ">
                                
                            <div className="p-2  w-auto inline-block rounded-full mb-2 transition-all ease-in-out delay-[0.1s] hover:bg-[#031018] " >
                            <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                              <img width={20} height={20} src="../images/gallery.svg" alt="" srcset="" />
                            </label>
                            <input type="file" id="fileInput" onChange={handleFileChange} accept="image/*" style={{display:"none"}}/>
                            </div>
                            <Link className="p-2  w-auto inline-block rounded-full mb-2 transition-all ease-in-out delay-[0.1s] hover:bg-[#031018] ">
                                <img width={20} height={20} src="../images/gif.svg" alt="" srcset="" />
                            </Link>
                            <Link className="p-2  w-auto inline-block rounded-full mb-2 transition-all ease-in-out delay-[0.1s] hover:bg-[#031018] ">
                                <img width={20} height={20} src="../images/list.svg" alt="" srcset="" />
                            </Link>
                            <Link className="p-2  w-auto inline-block rounded-full mb-2 transition-all ease-in-out delay-[0.1s] hover:bg-[#031018] ">
                                <img width={20} height={20} src="../images/emoji.svg" alt="" srcset="" />
                            </Link>
                            <Link className="p-2  w-auto inline-block rounded-full mb-2 transition-all ease-in-out delay-[0.1s] hover:bg-[#031018] ">
                                <img  width={20} height={20} src="../images/time.svg" alt="" srcset="" />
                            </Link>
                            <Link className="p-2  w-auto inline-block rounded-full mb-2 transition-all ease-in-out delay-[0.1s] hover:bg-[#031018] ">
                                <img  width={20} height={20} src="../images/location.svg" alt="" srcset="" />
                            </Link>
                        </div>
                        <div className="postButton col-span-1 flex items-start">
                            <div className="bg-[#0e4d78] text-white rounded-full w-auto inline-block px-4 py-[5px] my-1" style={{cursor:'default'}} ref={postButton} onClick={onPost}>
                                Post
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1 className="">this is content</h1>
    </div>
}

export default Content