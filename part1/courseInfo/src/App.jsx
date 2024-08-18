import React from "react"



const Header = (props) => {
  return (
    
    <h1>{props.courseName}</h1>
    
  )

}
const Part = (props) =>{
  return(
    <p>
        {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  const parts = props.parts.map((p,i) => <Part key ={i} part={p.name} exercises={p.exercises}></Part>)
  return (
    <>
    {parts}
    </>
  )

}

const Total = (props) => {
  let sum = 0;
  props.parts.forEach(
    value => {sum += value.exercises}
  )


  return (
    <p>Number of exercises {sum}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  
  return (
    <div>
      <Header courseName = {course.name} /> 
      <Content parts = {course.parts}/>
      <Total parts = {course.parts} />
    </div>
  )
}

export default App