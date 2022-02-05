import React from 'react'
import students from '../../data/students'
import { Link } from 'react-router-dom'

function Students () {
  return (
    <>
      <h2 className='title'>Students</h2>
      <div className='students'>
        {students.map((student) => {
          return (
            <p key ={student.favFood}>
              <Link to={`aboutme/${student.name}`}>{ <img src={`/images/${student.image}`} controlsList ="nodownload"></img>}
              </Link>
            </p>
          )
        })}
      </div>
    </>
  )
}
export default Students
