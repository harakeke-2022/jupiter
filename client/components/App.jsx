import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Students from './Students'
import Aboutme from './Aboutme'
import Lie from './Lie'
import Truth from './Truth'

function App () {
  return (
    <>
      <h1 className='title'>Get to know students at EDA!</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <Routes>
        <Route path='/' element= { <Students /> } />
        <Route path='/aboutme' element= { <Students /> } />
        <Route path='/aboutme/:name' element={ <Aboutme /> } />
        <Route path='/truthorlie/:query' element ={ <Truth />} />
      </Routes>
    </>
  )
}

export default App
