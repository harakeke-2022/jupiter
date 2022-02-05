import React from 'react'
import { useParams } from 'react-router-dom'

function Truth () {
  const { query } = useParams()
  console.log(query)
  return (
    <div className='main'>
      {query === 'truth'
        ? <img src='/images/truth-gif.gif' alt='truth-gif'/>
        : <img src='/images/lie-gif.gif' alt='lie-gif'/>
      }
    </div>
  )
}

export default Truth
