import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="animate-bounce" alt="React logo" />
        </a>
        <p className="text-3xl font-bold underline">Website under construction...</p>
      </div>
    </>
  )
}

export default App
