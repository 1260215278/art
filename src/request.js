import axios from 'axios'
import qs from "qs"

const servie=axios.create({
    baseURL:'http://www.yicangtianxia.com.cn/index',
    timeout :'5000',
    headers: {'content-type': 'application/x-www-form-urlencoded'}
})

servie.interceptors.request.use(
    config=>{
        config.data=qs.stringify(config.data)
        return config
    },
    error =>{
        return Promise.reject(error)
    }
)

servie.interceptors.response.use(
    response=>{
        const res= response.data
        return res
    },
    error =>{
        
        return Promise.reject(error)
    
    }
)

export default servie