import React from "react"
import Loading from "../components/Loading"
import { useSetRecoilState } from "recoil"
import { Suspense } from "react"
import user from "../states/userData"
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const Home = React.lazy(() => "../pages/Home")
const Login = React.lazy(() => "../pages/Login")
const Signup = React.lazy(() => "../pages/Signup")
const Logout = React.lazy(() => "../pages/Logout")



function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        } />
        <Route path="/signup" element={
          <Suspense fallback={<Loading />}>
            <Signup />
          </Suspense>
        } />
        <Route path="/logout" element={
          <Suspense fallback={<Loading />}>
            <Logout />
          </Suspense>
        } />
        <Route path="/login" element=
          {
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
