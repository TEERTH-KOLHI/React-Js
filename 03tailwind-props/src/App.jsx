import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = { // object
    username: "Jane Mine",
    age: 23
  }
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
      

      <Card username = "Jane" btntxt = "Click Me" someObj = {myObj}/> {/*here passing name, and someObj to props*/}
      <Card username = "Sofia"/> {/*here passing username to props*/}

    </>
  )
}

export default App
