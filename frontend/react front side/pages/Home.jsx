import React from "react";
import "./Home.css"
import Content from "../components/Content"
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TopMenu from "../components/TopMenu";
function Home(){
    return <div className="home overflow-auto">
      <div className="grid grid-cols-12">
        <div className="xl:col-span-3 col-span-2 ">
          <NavBar/>
        </div>
        <div className="xl:col-span-5 col-span-8 ">
          <TopMenu/>
          <Content/>
        </div>
        <div className="xl:col-span-4 col-span-2">
          <SideBar/>
        </div>
      </div>
    </div>
}


export default Home;