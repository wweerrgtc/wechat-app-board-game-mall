// pages/wallet/wallet.js
import request from '../../utils/request'
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userId: '',
        money: '',
        wallet: ''
    },
    showModal: function () {
        var that = this
        wx.showModal({
            title: '充值界面',
            editable: true,
            placeholderText: '请输入充值金额',
            success(res) {
                if (res.confirm) {
                    that.setData({
                        money: res.content
                    })
                    that.rechange();
                } else if (res.cancel) {
                    console.log(res)
                }
            }
        })
    },
    async rechange() {
        let userId = this.data.userId
        console.log(userId)
        let money = this.data.money
        await request('/userinfo/rechange', {
            userId,
            money
        })

        wx.showToast({
            title: '充值成功',
            icon: 'success',
        })

        setTimeout(function () {
            wx.navigateBack()
        }, 1000)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {

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
        this.setData({
            wallet: app.globalData.userinfo.wallet,
            userId: app.globalData.userinfo.userId
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    }
})