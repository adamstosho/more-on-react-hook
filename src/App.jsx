import React from 'react'
import { Routes, Route,  } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NumberBox from './NumberBox'


const App = () => {
  return (
    <div className='h-full bg-primaryColor text-white md:px-20 p-6'>
  
   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/number-box" element={<NumberBox/>}/>
      </Routes>
   
  
    </div>
  )
}

export default App
