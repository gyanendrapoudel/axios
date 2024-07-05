import { useEffect } from "react"
import authFetch from "../axios/interceptors"

const url = 'https://www.course-api.com/react-store-products'
const Interceptor = () => {

  const fetchData = async ()=>{

      try {
        const response = await authFetch('/react-store-products')
        console.log(response)
      } catch (error) {
        console.log(error.response)
      }
}
useEffect(()=>{
  fetchData()
},[])
  return (
    <div>Interceptor</div>
  )
}
export default Interceptor