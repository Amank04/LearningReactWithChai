import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, Router } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Layout from './components/Layout'
import User from './components/User/User'
import Github from './components/Github/Github'
import { getGithubInfo } from './components/Github/Github'
import "./index.css"

// const router = createBrowserRouter([
//   {
//   path:"/",
//   element: <Layout />,
//   children: [
//     {
//       path: "",
//       element: <Home />,
//     },
//     {
//       path: "about",
//       element: <About />
//     },
//     {
//       path: "contact",
//       element: <Contact />
//     }
//   ]
// }
// ])

const router = createBrowserRouter(
 createRoutesFromChildren(
  <Route path='/' element={<Layout/>}>
     <Route path='' element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='user/:userId' element={<User/>} />
     <Route loader={getGithubInfo} path='github' element={<Github/>} />

  </Route>
 )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
