import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {About,Dashboard,Home, SignIn,SignUp, Projects} from './pages/index'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/projects' element={ <Projects/>} />
        
        
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App