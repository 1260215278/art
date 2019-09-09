import axios from 'axios'


const servie=axios.create({
    baseURL:'http://www.yicangtianxia.com.cn/index',
    timeout :' 5000'
})

servie.interceptors.request.use(
    config=>{
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