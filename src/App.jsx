import { useState } from 'react'
import './App.css'
import FirstRequest from './components/1.first-axios-request'
import Header from './components/2.header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h3>Axios</h3>
      {/* <FirstRequest /> */}
      <Header />
    </div>
  )
}

export default App
