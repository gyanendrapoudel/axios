const url = 'https://www.course-api.com/react-store-products'
import axios from "axios"
import { useEffect } from "react"
const FirstRequest = () => {

   const fetchData = async ()=>{
        try
            {
                const response = await axios(url)
                const data = response.data;
                console.log(data)
            }catch(error){
                console.log(error.response)
                // error in error.response
           }
        
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
      <p>
        <strong>1. First Request: </strong>
        meaning fetching data using axios and reading error using error.response
      </p>
    </div>
  )
}
export default  FirstRequest