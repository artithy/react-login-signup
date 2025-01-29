import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginSignup from './Components/Assetes/LoginSignup/LoginSignup'


// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginSignup/>
    </>
  )
}

export default App
