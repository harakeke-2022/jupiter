import React from 'react'

// import Aboutme from './Aboutme'
import Students from './Students'

function App () {
  return (
    <>
      <div className='title'>
        <h1>Get to know students at EDA!</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Students />
        {/*<Routes> */}
          {/* <Route path='/Aboutme/:name' element={ <Aboutme/> } /> */}
        {/* </Routes> */}
      </div>
    </>
  )
}

export default App