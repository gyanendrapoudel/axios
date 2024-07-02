import { useState } from 'react'
import './App.css'
import FirstRequest from './components./1.first-axios-request'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   axios
   <FirstRequest/>
   </>
  )
}

export default App
