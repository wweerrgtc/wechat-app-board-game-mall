import request from '../../utils/request'
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        productList: [],

    },
     return (event) {
        var orderId = event.currentTarget.id;
        wx.showModal({
            title: '是否立即归还桌游',
            // content: '这是一个模态弹窗',
            async success(res) {
                if (res.confirm) {
                    let result = await request('/orderinfo/setComplete', {
                        orderId
                    })
                    if (result.code == 200) {
                        wx.showToast({
                            title: '归还成功'
                        })
                        setTimeout(function () {
                            wx.navigateBack()
                        }, 1000)
                    }
                } else if (res.cancel) {}
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {

        if (!app.globalData.isLogin) {

            wx.showToast({
                title: '操作失败, 未登录',
                icon: 'none',
            })
            return
        }
        let userId = app.globalData.userinfo.userId
        let result = await request('/orderinfo/getOrderList', {
            renter: userId
        })
        this.setData({
            productList: result.data
        })

    },
    async listOrderinfoByRenter() {
        if (!app.globalData.isLogin) {

            wx.showToast({
                title: '操作失败, 未登录',
                icon: 'none',
            })
            return
        }
        let userId = app.globalData.userinfo.userId
        let result = await request('/orderinfo/getOrderList', {
            renter: userId
        })
        this.setData({
            productList: result.data
        })
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