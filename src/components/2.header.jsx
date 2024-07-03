
import  axios from "axios"
import { useEffect, useState } from "react"

const url = 'https://icanhazdadjoke.com'
const Header = () => {
   const [joke, setJoke] = useState("Random dad joke")
  
   const fetchDataJoke = async ()=>{
    try {
      const {data} = await axios(url,{
        headers:{
          Accept:"application/json"
        }
      },
    )
      console.log(data)
      setJoke(data)
      
    } catch (error) {
      console.log(error.response)
      
    }
  }
   
   console.log(joke)

  return (
    <div>
      <p>
        <strong>2. Header</strong>
      </p>
      <button onClick={fetchDataJoke}>
        Random Joke
      </button>
      <p>{joke.joke}</p>
    </div>
  )
}
export default Header