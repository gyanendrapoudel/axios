import axios from 'axios'
import { useEffect } from 'react'
const productUrl = 'https://www.course-api.com/react-store-products'
const randomUrl ='https://randomuser.me/api'
const Global = () => {
    const fetchData = async()=>{
        try {
            const resp1 = await axios(productUrl)
            const resp2 = await axios(randomUrl)
            console.log(resp1)
            console.log(resp2)
        } catch (error) {
            console.log(error.response)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>Global Instances</div>
  )
}
export default Global