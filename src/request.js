import axios from 'axios'
import qs from "qs"

const servie=axios.create({
    baseURL:'http://admin.yicangtianxia.com.cn/index',
    timeout :'5000',
    headers: {'content-type': 'application/x-www-form-urlencoded',"Access-Control-Allow-Origin" : "*"}
  
})

servie.interceptors.request.use(
    config=>{
        // config.data=qs.stringify(config.data)
           // 兼容 post 跨域问题 
           console.log(config)
    if (config.method === 'post') {
    
        // 修改 Content-Type
        config.headers['Content-Type'] =
          'application/x-www-form-urlencoded';
          
        // 将对象参数转换为序列化的 URL 形式（key=val&key=val）
        config.data = qs.stringify(config.data);
      }
      console.log(config)
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