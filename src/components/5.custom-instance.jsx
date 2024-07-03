import axios from "axios"
import authFetch from "../axios/custom"
const randomUrl = 'https://randomuser.me/api'

const Custom = () => {
    const fetchData = async()=>{
        try {
            const resp1 =  await authFetch('/react-store-products')
            const resp2 = await axios(randomUrl)
        } catch (error) {
            
        }
    }
  return (
    <div>Custom</div>
  )
}
export default Custom