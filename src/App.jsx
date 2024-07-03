import { useState } from 'react'
import './App.css'
import FirstRequest from './components/1.first-axios-request'
import Header from './components/2.header'
import Post from './components/3.post-request'
import Global from './components/4.global-instance'
import './axios/global'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h3>Axios</h3>
      {/* <FirstRequest /> */}
      {/* <Header />
      <Post/> */}
      <Global/>
    </div>
  )
}

export default App
