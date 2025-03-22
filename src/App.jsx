import './App.css'
import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Sign from './components/Sign'
import Account from './components/Account'
import { createBrowserRouter, RouterProvider } from 'react-router'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/sign",
      element: <Sign />
    },
    {
      path: "/account",
      element: <Account />
    },
  ])
  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App