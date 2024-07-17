import { useState } from 'react'
import './App.css'


function App() {
  
  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    if(counter < 20){
      setCounter(counter + 1)
    }else{
      alert("You can't update value!")
    }
  }
  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }else{
      alert("You can't go negative value!")
    }
  }
  return (
    <>
      <h1>Counter:  {counter}</h1>
      <button
      onClick={addValue}
      >Add</button>
      <br /><br />
      <button
      onClick={removeValue}
      >Remove</button>
    </>
  )
}

export default App
