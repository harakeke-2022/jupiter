import React from 'react'
import students from '../../data/students'
import { Link } from 'react-router-dom'

function Students () {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {students.map((student) => {
          return (
            <li>
              <Link to={`Aboutme/${student}`}>
                hi
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Students
