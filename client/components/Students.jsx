import React from 'react'
import students from '../../data/students'
import { Link } from 'react-router-dom'

function Students () {
  return (
    <div>
      <h2>Students</h2>
      <ul>
        {students.map((student) => {
          return (
            <>
              <Link to={`Aboutme/${student.name}`}>{ <img src={`/images/${student.image}`}></img>}
              </Link>
            </>
          )
        })}
      </ul>
    </div>
  )
}
export default Students
