import { useState , useEffect } from 'react'
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Logout from "../pages/Logout"

import { useSetRecoilState} from "recoil"
import user from "../states/userData"
import './App.css'

import { BrowserRouter, Route, Routes , useNavigate} from 'react-router-dom'

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
