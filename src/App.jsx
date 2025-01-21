import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './assets/components/Form'
import Register from './assets/components/Register'
import Details from './assets/components/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Details/>
    </>
  )
}

export default App
