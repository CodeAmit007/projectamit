import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import MainPage from './components/MainPage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Privaterouting from './privaterouting/Privaterouting'

const RouterLayout = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/projects",
          element: <Project />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/dashboard",
          element: <Privaterouting>
            <Dashboard />
          </Privaterouting>
        }
      ]
    }
  ])

  return <RouterProvider router={routes} />

}

export default RouterLayout