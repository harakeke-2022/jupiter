import React from 'react'
import { useParams } from 'react-router-dom'
import students from '../../data/students'

function Aboutme () {
  const { name } = useParams()
  const eachStudent = students.find((findStudent) =>
    findStudent.name === name

  )
  console.log(eachStudent)
  return (
    <div>
      <h2>About Me</h2>
      <ul>
        <li>{eachStudent.name} </li>
        <li> My star sign is {eachStudent.starSign}</li>
        <li>I really love {eachStudent.favFood}</li>
        <li>My cohort at devskool is {eachStudent.cohort}</li>
        <ul>
          <li>
            <p>Choose my truth!</p>
          </li>
        </ul>
      </ul>
    </div>
  )
}

export default Aboutme
