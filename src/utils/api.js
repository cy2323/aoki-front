// axios接口的封装API
import axios from 'axios'
import {
    Message
} from 'element-ui'
import router from '../router'

// 响应拦截器
axios.interceptors.response.use(success => {
    // 判断业务逻辑错误
    // success.status == 200表示接口调用成功，但不代表后端返回的业务逻辑也是正常的，所以需要继续往下判断
    if (success.status && success.status == 200) {
        // 这里的code，是因为后端的返回值模板（R.java）中定义的返回值编码为【code】
        if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403) {
            Message.error({
                message: success.data.msg
            });
            return;
        }
        if (success.data.message) {
            Message.success({
                message: success.data.msg
            });
        }
        return success.data;
    }
}, error => {
    if (error.response.status == 504 || error.response.status == 404) {
        Message.error({
            message: '服务器挂了!'
        });
    } else if (error.response.status == 403) {
        Message.error({
            message: '权限不足，请联系管理员！'
        });
    } else if (error.response.status == 401) {
        Message.error({
            message: '尚未登录。请登录!'
        });
        router.replace('/');
    } else {
        if (error.response.data.message) {
            Message.error({
                message: error.response.data.message
            });
        } else {
            Message.error({
                message: '未知错误！'
            });
        }
    }
    return;
})


// 请求拦截器
axios.interceptors.request.use(config => {
    // 如果存在token，请求必须携带这个token，后端会有登录拦截器去验证该token的正确性
    if (window.sessionStorage.getItem("tokem")) {
        config.headers['Authorization'] = window.sessionStorage.getItem("tokem");
    }
    return config;
}, error => {
    console.log(error);
})

let baseUrl = '';

// 传送json格式的post请求
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: url,
        data: params
    })
}

export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: url,
        data: params
    })
}

export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: url,
        data: params
    })
}

// export function postRequest(url, params) {
//     return axios.post(url, params);
// }

// export function getRequest(url, data) {
//     return axios.get(url, data);
// }

// export function deleteRequest(url) {
//     return axios.delete(url);
// }

// export function putRequest(url, data) {
//     return axios.put(url, data);
// }