import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import Login from './Login'
import Signup from './Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="parent">
      <Login />
      <Signup />
    </div>
    </>
  )
}

export default App
