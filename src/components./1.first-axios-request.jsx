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
        First Request
    </div>
  )
}
export default  FirstRequest