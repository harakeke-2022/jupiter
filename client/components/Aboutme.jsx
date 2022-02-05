import React from 'react'
import { useParams, Link } from 'react-router-dom'
import students from '../../data/students'

function Aboutme () {
  const { name } = useParams()
  const eachStudent = students.find((findStudent) =>
    findStudent.name === name

  )
  console.log(eachStudent)

  // function handleClick () {
  //   console.log('clicked')
  // }

  return (
    <div>
      <h2 className='title'>About Me</h2>
      <div className='aboutme main'>
        <ul>
          <li>{eachStudent.name} </li>
          <img src={`/images/${eachStudent.image}`} controlsList ="nodownload" />
          <li> My star sign is {eachStudent.starSign}</li>
          <li>I really love {eachStudent.favFood}</li>
          <li>My cohort at devskool is {eachStudent.cohort}</li>
          <ul>
            <p>Choose my truth!</p>

            {/* showDetails  */}
            {/* need some logic to randomise these options. Could put them into array and use rand num */}
            <li><Link to="/truthorlie/truth">{eachStudent.truth[0]}</Link></li>
            <li><Link to="/truthorlie/truth">{eachStudent.truth[1]}</Link></li>
            <li> <Link to="/truthorlie/lie">{eachStudent.lie}</Link></li>

          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Aboutme
