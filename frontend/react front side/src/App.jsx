import React, { useEffect, useState } from "react"
import Loading from "../components/Loading"
import { useSetRecoilState } from "recoil"
import { Suspense } from "react"
import user from "../states/userData"
import './App.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, useNavigate } from 'react-router-dom'
const Home = React.lazy(() => import("../pages/Home"))
const Login = React.lazy(() => import("../pages/Login"))
const Signup = React.lazy(() => import("../pages/Signup"))
const Logout = React.lazy(() => import("../pages/Logout"))



function App() {
  const [componentLoaded, setComponentLoaded] = useState()
  useEffect(() => {
    setComponentLoaded(true)
  })

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <div>Error....   :(</div>
    }, {
      path: "/logout",
      element: <Logout />,
      children: [{
        path: "/logout/login",
        element: <Login />
      }, {
        path: "/logout/signup",
        element: <Signup />
      }

      ]
    }
  ])
  return (
    <Suspense fallback={<Loading/>}>

      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
