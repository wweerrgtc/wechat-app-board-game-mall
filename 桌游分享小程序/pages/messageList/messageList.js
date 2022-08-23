import request from '../../utils/request'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: '',
    message: [],
    title:'',
    content:''
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow: function (options) {
    if (!app.globalData.isLogin) {
      return
  }
  this.setData({
    userId: app.globalData.userinfo.userId
  })
    this.getMessageList()
    this.getMessageNum()
  },
  showContent(event) {


    for (var index in this.data.message) {
      if (event.currentTarget.id == this.data.message[index].msgId) {
        console.log("进入了if")
        this.setData({
          title: this.data.message[index].title,
          content: this.data.message[index].content
        })
      }
    }

    wx.showModal({
      title: this.data.title,
      content: this.data.content,
      success(res) {
        if (res.confirm) {
        } else if (res.cancel) {
        }
      }
    })
  },
  async getMessageList() {
    let userId = this.data.userId
    let result = await request('/messageList/getMessageList', {
      userId
    })
    this.setData({
      message: result.data
    })
  },
    
  async getMessageNum(){
    let userId = this.data.userId
    let result = await request('/messageList/getMessageNum', {
      userId
    })
    app.globalData.msgNum = result.obj
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {
  //   var ths = this;
  //   //加载公告
  //   var params = {
  //     url: "/shop/notice/noticeList",
  //     method: "GET",
  //     data: {},
  //     callBack: function (res) {
  //       // console.log(res);
  //       ths.setData({
  //         news: res.records,
  //       });
  //     }
  //   };
  //   http.request(params);
  // },


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

  }
})