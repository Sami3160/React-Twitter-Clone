import React from "react";
import "./Home.css"
import Content from "../components/Content"
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
function Home(){
    return <div className="home">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <NavBar/>
        </div>
        <div className="col-span-5 border-white">
          <Content/>
        </div>
        <div className="col-span-4">
          <SideBar/>
        </div>
      </div>
    </div>
}


export default Home;