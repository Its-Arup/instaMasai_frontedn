import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'

function AllRoutes() {
  return (
    
      <Routes>
        <Route path='/sinup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    
  )
}

export default AllRoutes
