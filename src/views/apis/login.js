import request from  '../../request'

//获取短信验证码
export function getNote(data){
    return request({
        url:"/send.html",
        method:'post',
        data
    })
}

//会员登录
export function  login(data){
    return request ({
        url : "/login",
        method:'post',
        data:data
    })
}

//获取首页介绍
export function  getHomeAbout(data){
    return request ({
        url : "/homeabout",
        method:'post',
        data:data
    })
}

//首页产品

export function gethomeProduct(){
    return request({
        url:"/homeproduct",
        method:'post'
    })
}

//产品详情

export function getShowProduct(data){
    return request({
        url:'/showproduct',
        method:'post',
        data
    })
}

//藏品产品

export function getProduct(data){
    return request({
        url:'/product',
        method:'post',
        data
    })
}

//藏品介绍
export function getCangAbout(){
    return request({
        url:"/cangabout",
        method:'post'
    })
}

//关于我们

export function getAbout(){
    return request({
        url:'/about',
        method:'post'
    })
}