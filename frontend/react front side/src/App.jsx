import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "../components/NavBar"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage]=useState("");
  // useEffect(()=>{
  //   fetch(
  //     "http://localhost:5000/login",
  //     {
  //       method:"POST",
  //       credentials:"include",
  //       headers:{
  //         'Content-Type':'application/json',
  //         "Accept":"application/json"
  //       },
  //       body:JSON.stringify({
  //         email:"huihui@gmail.com",
  //         password:"root"
  //       })
  //     }
  //     )
  //   .then(
  //     (res)=>res.json()
  //   )
  //   .then((data)=>{
  //     setMessage(data.msg)
  //     cookie.save({"token":data["token"]})
  //     console.log(data)
  //   })
  // },[])
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
