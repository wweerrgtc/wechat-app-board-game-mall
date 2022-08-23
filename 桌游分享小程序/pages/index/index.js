import request from '../../utils/request'
const app = getApp()

Page({
  data: {
    newMsg: false,
    indexImgs: [],
    autoplay:true,
    topList1: [],
    topList2: [],
  },
  onLoad: function() {
    this.getIndexImgsAndTopList()
  },
  toMessageList(){
    if (!app.globalData.isLogin) {
      wx.showToast({
          title: '操作失败, 未登录',
          icon: 'none',
      })
      return
  }
    wx.navigateTo({
      url: '/pages/messageList/messageList'
    })
  },

  async getIndexImgsAndTopList() {
    let indexImgs = await request('/goodsinfo/getIndexImgs')
    this.setData({
      indexImgs: indexImgs.data
    })
    let topList = await request('/goodsinfo/getTopList')
    this.setData({
      topList1: topList.data.slice(0, 3),
      topList2: topList.data.slice(3, 6)
    })
},
// 带着商品信息跳转
toProduct: function(event) {
  var gid = event.currentTarget.id;
    if (gid) {
      wx.navigateTo({
        url: '/pages/product/product?gid=' + gid,
      })
    }
  },
  // 跳转搜索页
  toSearchPage: function () {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  async recommended(){
    if (!app.globalData.isLogin) {
      wx.showToast({
        title: '操作失败, 未登录',
        icon: 'none',
      })
      return
    }
    let userId = app.globalData.userinfo.userId
    let result = await request('/goodsinfo/recommended', {
      userId
    })
    if (result.code != 200){
      wx.showToast({
        title: result.msg,
        icon: 'none',
      })
      return
    }
    wx.navigateTo({
      url: '/pages/discount/discount?gid=' + result.obj,
    })
  },

  async dailyCheck() {
    if (!app.globalData.isLogin) {
        wx.showToast({
            title: '操作失败, 未登录',
            icon: 'none',
        })
        return
    }
    let userId = app.globalData.userinfo.userId
    let result = await request('/userinfo/dailyCheck',{
      userId
    })
    wx.showToast({
      icon:"none",
      title: result.msg
    })
  },

  toShare: function() {
    if (!app.globalData.isLogin) {
      wx.showToast({
          title: '操作失败, 未登录',
          icon: 'none',
      })
      return
  }
    wx.navigateTo({
      url: '/pages/share/share',
    })
  },

  // 废弃功能
  toTopList: function() {
    wx.navigateTo({
      url: '/pages/topList/topList',
    })
  },
  onHide: function () {
    this.setData({
      autoplay: false
    })
  },

  onShow: function() {
    this.setData({
      autoplay: true
    })
    
    if (app.globalData.isLogin) {
      this.getMessageNum()
  }

  },
  async getMessageNum(){
    let userId = app.globalData.userinfo.userId
    let result = await request('/messageList/getMessageNum', {
      userId
    })
    if(result.obj != app.globalData.msgNum){
      this.setData({
        newMsg:true
      })
    } else{
      this.setData({
        newMsg:false
      })
    }
  }

})