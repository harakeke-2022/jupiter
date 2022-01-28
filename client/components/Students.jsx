import React from 'react'
import students from '../../data/students'
import { Link } from 'react-router-dom'

function Students () {
  return (
    <div>
      <h2>Students</h2>
      {students.map((student) => {
        return (
          <p key ={student.favFood}>
            <Link to={`aboutme/${student.name}`}>{ <img src={`/images/${student.image}`} controlsList ="nodownload"></img>}
            </Link>
          </p>
        )
      })}
    </div>
  )
}
export default Students
