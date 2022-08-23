import request from '../../utils/request'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderAmount: '',
    sts: '',
    wishListCount: 0,
    shareNum: 0,
    userinfo: '',
    isLogin: false
  },
  toShareList() {
    if (!app.globalData.isLogin) {
      wx.showModal({
        title: "未登录",
        content: "立即前往登录界面",
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/login/login',
            })
          }
        }
      })
      return
    }
    wx.navigateTo({
      url: '/pages/shareList/shareList',
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.updateUserinfo()
    this.setData({
      userinfo: app.globalData.userinfo,
      isLogin: app.globalData.isLogin
    })
    this.updateWishListCount()
    this.updateShareNum()
  },
  async updateShareNum() {

    if (this.data.isLogin) {

      let result = await request('/goodsinfo/updateShareNum', {
        userId: this.data.userinfo.userId
      })
      this.setData({
        shareNum: result.obj
      })
    }
  },
  async updateWishListCount() {

    if (this.data.isLogin) {

      let result = await request('/wishList/getWishListCountByUserId', {
        userId: this.data.userinfo.userId
      })
      this.setData({
        wishListCount: result.obj
      })
    }
  },
  async updateUserinfo() {
    if (this.data.isLogin) {
      let username = this.data.userinfo.username;
      let password = app.globalData.userinfo.password;
      let result = await request('/userinfo/login', {
        username,
        password,
      })
      app.globalData.userinfo = result.obj;
      this.setData({
        userinfo: app.globalData.userinfo,
        isLogin: app.globalData.isLogin
      })

    }
  },
  toWishList() {
    setTimeout(function () {
      wx.navigateTo({
        url: '/pages/wishList/wishList',
      })
    }, 200)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  toOrderList: function () {
    wx.navigateTo({
      url: '/pages/orderList/orderList',
    })
  },

  toShare: function () {
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

  toWallet: function () {
    wx.navigateTo({
      url: '/pages/wallet/wallet',
    })
  },

  toMyAddress: function () {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },

  // 跳转绑定手机号
  toBindingPhone: function () {
    wx.navigateTo({
      url: '/pages/binding-phone/binding-phone',
    })
  },

  // 跳转绑定手机号
  toLogin: function () {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  toOrderListPage: function (e) {
    var sts = e.currentTarget.dataset.sts;
    wx.navigateTo({
      url: '/pages/orderList/orderList?sts=' + sts,
    })
  },


})