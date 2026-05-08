import React from 'react'
import { Route, Routes } from 'react-router'
import MainLayouts from './components/layouts/MainLayouts'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
   <>
   <Routes>
    <Route element={<MainLayouts/>}>
       <Route path='/' element={<Home/>} />
    </Route>
        <Route path='/register' element={<Register/>} />
       <Route path='/login' element={<Login/>} />
   </Routes>
   </>
  )
}

export default App