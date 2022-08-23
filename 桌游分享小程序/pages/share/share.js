import request from '../../utils/request'
const app = getApp()
// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userId: '',
        gname: '',
        price: '',
        rent: '',
        image: '',
        category: '',
        description: ''
    },
    updateImg(event) {
        this.setData({
            image: event.detail.value
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        if (app.globalData.userinfo) {
            this.setData({
                userId: app.globalData.userinfo.userId,
            })
        }
    },
    textinput(event) {
        let type = event.target.id
        this.setData({
            [type]: event.detail.value
        })
    },
    async submit() {
        let {
            userId,
            gname,
            price,
            rent,
            image,
            category,
            description
        } = this.data;
        let result = await request('/goodsinfo/shareGoodsinfo', {
            owner: userId,
            gname,
            price,
            rent,
            image,
            category,
            description
        })
        if (result.code === 200) {
            wx.showToast({
                title: '保存成功'
            })
            setTimeout(function () {
                wx.navigateBack();
            }, 1000)
        } else {
            wx.showToast({
                title: '修改',
                icon: 'none'
            })
        }
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