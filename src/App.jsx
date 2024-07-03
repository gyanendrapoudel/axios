import { useState } from 'react'
import './App.css'
import FirstRequest from './components/1.first-axios-request'
import Header from './components/2.header'
import Post from './components/3.post-request'
import Global from './components/4.global-instance'
// import './axios/global'
import Custom from './components/5.custom-instance'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h3>Axios</h3>
      {/* <FirstRequest /> */}
      {/* <Header />
      <Post/> */}
      {/* <Global/> */}
      <Custom/>
    </div>
  )
}

export default App
