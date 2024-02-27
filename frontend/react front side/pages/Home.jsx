import React from "react";
import "./Home.css"
import Content from "../components/Content"
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TopMenu from "../components/TopMenu";
import { useSetRecoilState } from "recoil"
import user from "../states/userData"
import { useState, useEffect } from 'react'

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate()
  const setUser = useSetRecoilState(user);
  const [data, setData] = useState();
  const [online, setOnline] = useState(true);
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {

        const res = await fetch(
          "http://localhost:5000/",
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              "Accept": "application/json"
            }
          })
        // .then((result)=>res=result)

        if (res.status == 401) {
          // navigator.navigate('/logout')
          navigate('/logout', { replace: true })

        } else if (res.status == 200) {
          const data = await res.json()
          setData(data)
          setLoaded(true)
        }
        if (data) {
          // const email=date.email;
          setUser({
            email: data.email,
            username: data.username

          })
        }
      } catch (error) {
        console.log('huhiuhui')
        console.log(error)
      }
    }
    fetchData()
  }, [])

  if (!loaded) {
    return <div className="loading bg-black flex justify-center items-center h-[100vh]">
      <div className="text-white">
        <img src="../images/newx-5.svg" className="x opacity-20" />
        {online ? <div>loading...</div> : <div>dont worry...</div>}
      </div>
    </div>
  }
  if (data) {
    return <div className="home overflow-auto">
      <div className="grid grid-cols-12">
        <div className="xl:col-span-3 col-span-2 ">
          <NavBar />
        </div>
        <div className="xl:col-span-5 col-span-8 ">
          <TopMenu />
          <Content />
        </div>
        <div className="xl:col-span-4 col-span-2">
          <SideBar />
        </div>
      </div>
    </div>
  }
}


export default Home;