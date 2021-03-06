import JsonP from "jsonp"
import axios from "axios"
import {Modal} from "antd";

export default class Axios {
  static jsonp(options){
    return new Promise((resolve, reject) => {
      JsonP(options.url,{
        param:'callback'
      },function (err,response) {
        if (response.status === 'success'){
          resolve(response)
        }else {
          reject(response.message)
        }
      })
    })
  }

  static ajax(options){
    let baseApi = 'https://www.easy-mock.com/mock/5e706d92d5385d6ebfa18c66/mockapi';
    return new Promise((resolve, reject)=>{
      axios({
        url:options.url,
        method:'get',
        baseURL:baseApi,
        timeout:5000,
        params: (options.data && options.data.params) || ''
      }).then((response)=>{
        if (response.status === '200'){
          let res = response.data.result;
          if (res.code === '0'){
            resolve(res)
          }else {
            Modal.info({
              title:'提示',
              content:res.message
            })
          }
        }else {
          reject(response.data)
        }
      })
    })
  }
}