import { CODE_SUCCESS, CODE_AUTH_EXPIRED, CODE_MESSAGE, API_OPENTOKEN } from '../constants/err_code'
let app = getApp()
let x = 0;

export default function fetch(options) {
  const openToken = wx.getStorageSync('openToken') || ''

  if (openToken == "") {
    console.log("openToken空")
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://api.casamiel.cn/api/Open/GetNewOpenToken',
        data: {
          clientId: 'casafirstapi',
          clientsecret: 'tUxISRFsKp9I9pcJpBMLNJ4g8LOFwUu9'
        },
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log("GetNewOpenToken" ,res)
          x = x + 1;
          if (res.data.code == 0) {
            wx.setStorageSync('openToken', res.data.content.access_token)
            const { url, payload, method = 'GET', showToast = true, autoLogin = false } = options
            let { header } = options
            const uToken = wx.getStorageSync('uToken') || ''
            const defaultHeader = res.data.content.access_token ? { Authorization: `Bearer ${res.data.content.access_token}` } : {}
            if (uToken) {
              defaultHeader['u-token'] = uToken.access_token
            }
            if (method === 'POST') {
              defaultHeader['content-type'] = 'application/json'
            }
            header = { ...defaultHeader, ...header }
            wx.request({
              url,
              method,
              data: payload,
              header,
              success(res) {
                console.log('res====>', res)
                const data = res.data
                if (data.code === CODE_AUTH_EXPIRED) {
                  wx.showToast({
                    title: data.msg,
                    icon: 'none'
                  })
                  wx.clearStorage()
                }
                resolve(data)
              },
              fail(err) {
                console.log('err====>', err)
                reject(err)
              }
            })
          } else {
            if (x == 3) {
              wx.showToast({
                title: "401网络不稳定 请重试",
                icon: 'none',
                duration: 2000
              })
              x = 0
            }
          }
        },
        fail(err) {
          console.log("err", err)
          wx.showToast({
            title: err.errMsg,
            icon: 'none',
            duration: 2000
          })
        }
      })
    })
  } else {
    console.log("openToken缓存")
    const { url, payload, method = 'GET', showToast = true, autoLogin = false } = options
    let { header } = options
    const uToken = wx.getStorageSync('uToken') || ''
    //设置默认头
    //设置openToken
    const defaultHeader = openToken ? { Authorization: `Bearer ${openToken}` } : {}
    //设置uToken
    if (uToken) {
      defaultHeader['u-token'] = uToken.access_token
    }
    if (method === 'POST') {
      defaultHeader['content-type'] = 'application/json'
    }

    header = { ...defaultHeader, ...header }
    
    console.log("header", header)

    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method,
        data: payload,
        header,
        success(res) {
          console.log('res====>', res)
          const data = res.data
          // if (parseInt(data.code) !== CODE_SUCCESS) {
          //   return Promise.reject(data)
          // }
          if (data.code === CODE_AUTH_EXPIRED) {
            wx.showToast({
              title: data.msg,
              icon: 'none'
            })
            wx.clearStorage()
          }
          if (res.statusCode === API_OPENTOKEN) {
            console.log("openToken401")
            wx.clearStorage()
            wx.reLaunch({
              url: '/pages/index/index'
            })
          }
          resolve(data)
        },
        fail(err) {
          console.log('err====>', err)
          const defaultMsg = err === CODE_AUTH_EXPIRED ? '登录失效' : '请求异常'
          reject(err)
        }
      })
    })
  }
}