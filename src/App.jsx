import { useState } from 'react'
import { ReactDOM } from 'react'
import './App.css'
import DigitalCard from './DigitalCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>My Digital Card</h1>
      <DigitalCard/>
    </div>
  )
}

export default App
