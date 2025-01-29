import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.jsx'

function App() {
  let [Counter,setCounter]=useState(5)
//    let Counter = 5;
    const addvalue = ()=>{
      //console.log("clicked",Math.random())
      Counter  = Counter+1
      setCounter(Counter)
    }
    const removevalue=()=>{
      setCounter(Counter-1)
    }
  return (
    
    <>
    <h1>Learning React</h1>
    <h2>Counter :{Counter}</h2>
    <button
    onClick={addvalue}>+ :{Counter}</button>
    <br/>
    <button onClick={removevalue}>- :{Counter}</button>
    <p>footer:{Counter}</p>
    </>
  )
}

export default App
