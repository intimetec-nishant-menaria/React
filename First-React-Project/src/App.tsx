import { useState } from 'react'
import Button from './Button.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={()=> setCount(count+1)}>increment</button>
      <Button  onClickHandler={()=> setCount(count - 1)} text="decrement"></Button>
    </>
  )
}

export default App
