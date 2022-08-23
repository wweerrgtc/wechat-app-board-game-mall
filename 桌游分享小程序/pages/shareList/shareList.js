import request from '../../utils/request'
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        productList: []

    },
    toProduct: function (event) {
        var gid = event.currentTarget.id;
        if (gid) {
            wx.navigateTo({
                url: '/pages/product/product?gid=' + gid,
            })
        }
    },
    delProduct(event) {
        var gid = event.currentTarget.id;
        let that = this
        wx.showModal({
            title: "删除",
            content: "是否取消共享",
            async success(res) {
                if (res.confirm) {
                    await request('/goodsinfo/delProduct', {
                        gid
                    })
                    wx.showToast({
                        title: '操作成功',
                    })
                    that.getShareList()
                }
            }
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
        this.getShareList()
    },

    async getShareList() {
        let userId = app.globalData.userinfo.userId
        let result = await request('/goodsinfo/getShareList', {
            userId
        })
        this.setData({
            productList: result.data
        })
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






})