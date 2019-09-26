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
//会员注册
export function zhuce(data){
    return request({
        url:"/zhuce.html",
        method:"post",
        data
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
        url:'/showproduct.html',
        method:'post',
        data
    })
}

//藏品产品

export function getProduct(data){
    console.log(data)
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

export function getActivity(){
    return request({
        url:"/activity",
        method:"post"
    })
}

//密码找回
export function getZhaohui(){
    return request({
        url:"/zhaohui",
        method:"post"
    })
}

//获取关键字

export function getQuery(data){
    return request({
        url:"/sousuo",
        method:"post",
        data
    })
}