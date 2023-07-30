import React, { useState } from 'react'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Resetpass from './components/Resetpass'

function App() {
  const [user,setLoginUser]=useState({

  })
  return (
<div>
  <Routes>
    <Route path ='/' element={<Home />} />
    <Route path ='/login' element={<LoginPage />} />
    <Route path ='/register' element={<RegisterPage />} />
    <Route path = '/reset' element={<Resetpass />} />
  </Routes>
</div>
)
}

export default App