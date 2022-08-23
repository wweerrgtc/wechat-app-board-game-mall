// 发送Ajax请求

export default (url, data={}, method='GET') => {
    return new Promise ((resolve, reject) => {
        wx.request({
          url: 'http://localhost:8080' + url, 
          data,
          method,
          success: (res) => {
              resolve(res.data)
          },
          fail: (err) => {
              reject(err)
          } 
        })
    })
}