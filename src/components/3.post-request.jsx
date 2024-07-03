import axios from "axios"
import { useState } from "react"
const url = 'https://www.course-api.com/axios-tutorial-post'
const Post = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = async (e)=>{
            e.preventDefault();
            console.log(email, password)
            // sending a post request
            try {
            const response = await axios.post(url, {
              email: email,
              password: password,
            })
            console.log(response.data) 
                
            } catch (error) {
                console.log(error.response)
            }

    }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          id=""
         
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          type="text"
          name="password"
          id=""
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button>Submit</button>
     
    </form>
  )
}
export default Post