import React from 'react'

import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import ContactUs from '../Pages/ContactUs/ContactUs'
import AboutUs from '../Pages/AboutUs/AboutUs'
import Blog from '../Pages/Blog/Blog'
import LogIn from '../Pages/LogIn/LogIn'
const Router = () => {
  return (
    <>
<BrowserRouter>
<Routes>
     <Route path='/login' element={<LogIn/>} />
     <Route path='/' element={<Home/>} />
     <Route path='/contact-us' element={<ContactUs/>} />
     <Route path='/about-us' element={<AboutUs/>} />
     <Route path='/blog' element={<Blog/>} />

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default Router