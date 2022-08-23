import request from '../../utils/request'
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: '',
        password: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
    },
    textinput(event) {
        let type = event.target.id
        this.setData({
            [type]: event.detail.value
        })
    },
    async login() {
        let that = this
        let {
            username,
            password,
        } = this.data;
        if (!password || !username) {
            wx.showToast({
                title: '账号密码不能为空',
                icon: 'none'
            })
            return
        }
        let result = await request('/userinfo/login', {
            username,
            password,
        })
        if (result.code === 200) {
            wx.showToast({
                title: '登录成功'
            })
            app.globalData.userinfo = result.obj;
            app.globalData.isLogin = true;
            that.getMessageNum()

            console.log(app.globalData.userinfo)
            setTimeout(function () {
                wx.navigateBack()
            }, 1000)

        } else {
            wx.showToast({
                title: result.msg,
                icon: 'none'
            })
        }
    },
  async getMessageNum(){
    let userId = app.globalData.userinfo.userId
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
    onShow: function () {

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

    }
})