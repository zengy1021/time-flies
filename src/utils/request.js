// 基础的ajax 封装
import axios from "axios";
import qs from "qs";
// import store from '@/store.js'
import { Message } from "element-ui";
// import {
//   proxyKey
// } from '@/const'

const codeMessage = {
  400: "客户端请求错误",
  401: "未认证",
  403: "禁止访问，请登录",
  404: "请求失败，未找到",
  405: "请求方法不允许",
  415: "请求的媒体类型有误",
  500: "服务器发生错误",
  502: "网关错误",
  503: "服务器暂时过载或维护",
  504: "网关超时"
};

// const locales = {
//   en: 'en-US',
//   zh: 'zh-CN'
// }
// const getLocale = () => {
//   const locale = localStorage.getItem('locale')
//   // 加en-US默认选项是防止用户浏览器首选语言设置为系统不支持的语言，比如德语之类的
//   return locales[locale] || 'en-US'
// }

// const baseUrl = process.env.NODE_ENV === 'production' ? `${proxyKey}/api` : '/api'
// const localUrl = !(process.env.NODE_ENV === 'production')

const http = (url, method, options = {}) => {
  const _baseUrl = "";
  return data => {
    let params = data;
    // 数据处理
    let headers = options.headers || {
      contentType: "application/x-www-form-urlencoded"
    };
    // const ignoreMessage = options.ignoreMessage
    const { contentType } = headers;
    if (contentType === "application/x-www-form-urlencoded") {
      data = qs.stringify(data);
    }
    if (contentType === "application/json") {
      // data = JSON.stringify(data)
    }
    // 本地登录
    // if (localUrl) {
    //   // 'usp-backdoor': '80259603/W9004068/80261017/W9002110/80268996/W9001856'80256742 W9004068
    //   // headers = Object.assign({ 'usp-backdoor': '80268996' }, headers) W9002721 W9002513
    // }

    // headers = Object.assign({
    //   'Accept-Language': getLocale()
    // }, headers)

    return new Promise((resolve, reject) => {
      axios({
        url: _baseUrl + url,
        method: method,
        data: method.toUpperCase() === "POST" ? data : null,
        params: method.toUpperCase() === "GET" ? params : null,
        headers,
        crossOrigin: true,
        withCredentials: true,
        paramsSerializer: options.paramsSerializer
      })
        .then(response => {
          let res = response.data;
          let code = response.data.code;
          if (code !== 200) {
            // 未登录
            if (code === 403) {
              document.cookie = "return=" + window.location.href;
              window.location.href = res.data;
            }
            return Promise.reject(response.data);
          }
          resolve(response.data);
        })
        .catch(err => {
          const response = err.response || {};
          const resData = response.data || {};
          const errors = resData.errors || [];
          const errorText =
            (errors[0] && errors[0].defaultMessage) ||
            codeMessage[response.status] ||
            err.message ||
            err.msg ||
            response.statusText ||
            "";
          Message.error(errorText);
          reject(err);
        });
    });
  };
};

const httpGet = (url, options) => {
  return http(url, "get", options);
};

const httpPost = (url, options) => {
  return http(url, "post", options);
};

export default {
  get: httpGet,
  post: httpPost
};
