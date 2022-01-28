import React from 'react'
import { useParams, Link } from 'react-router-dom'
import students from '../../data/students'

function Aboutme () {
  const { name, query } = useParams()
  const eachStudent = students.find((findStudent) =>
    findStudent.name === name

  )
  console.log(eachStudent)

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const rando = getRandomInt(1,4))


  // function handleClick () {
  //   console.log('clicked')
  // }

  return (
    <div>
      <h2>About Me</h2>
      <ul>
        <li>{eachStudent.name} </li>
        <img src={`/images/${eachStudent.image}`} controlsList ="nodownload" />
        <li> My star sign is {eachStudent.starSign}</li>
        <li>I really love {eachStudent.favFood}</li>
        <li>My cohort at devskool is {eachStudent.cohort}</li>
        <ul>
          {rando.map(truthlie => {
            {query === 1 || 2
            ? 
          }
            return ()
          })}

{/* <div>
      {query === 'truth'
        ? <img src='/images/truth-gif.gif' alt='truth-gif'/>
        : <img src='/images/lie-gif.gif' alt='lie-gif'/>
      }
    </div> */}
          
          <p>Choose my truth!</p>

          {/* showDetails  */}
          {/* need some logic to randomise these options. Could put them into array and use rand num */}
          <li><Link to="/truthorlie/truth">{eachStudent.truth[0]}</Link></li>
          <li><Link to="/truthorlie/truth">{eachStudent.truth[1]}</Link></li>
          <li> <Link to="/truthorlie/trutn">{eachStudent.lie}</Link></li>

        </ul>
      </ul>
    </div>
  )
}

export default Aboutme
