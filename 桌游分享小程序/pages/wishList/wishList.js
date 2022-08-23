import request from '../../utils/request'
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        productList: [],
        sumprice: 0
    },
    buyNow() {
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
        let product = this.data.product
        let total = product.rent + product.price
        this.setData({
            total: total
        })
        var that = this
        wx.showModal({
            title: '共需支付' + total + '元',
            editable: true,
            placeholderText: '请输入密码',
            success(res) {
                if (res.confirm) {
                    if (res.content != app.globalData.userinfo.password) {
                        wx.showToast({
                            title: '密码错误',
                            icon: 'none',
                        })
                        return
                    }

                    if (app.globalData.userinfo.wallet < total) {
                        wx.showToast({
                            title: '余额不足',
                            icon: 'none',
                        })
                        return
                    }
                    that.pay()
                } else if (res.cancel) {
                    console.log(res)
                }
            }
        })
    },
    async pay() {
        let userId = this.data.userId
        let total = this.data.total
        let owner = this.data.product.owner
        let gname = this.data.product.gname
        let gid = this.data.gid

        let result = await request('/userinfo/pay', {
            userId,
            total
        })
        if (result.code == 200) {
            let result = await request('/orderinfo/createOrder', {
                userId,
                owner,
                gid
            })
            if (result.code == 200) {

                await request('/messageList/createMessage', {
                    userId: owner,
                    title: "你的桌游" + gname + "被预定了",
                    content: "买家的联系电话: " + app.globalData.userinfo.phone + "; 买家的地址: " + app.globalData.userinfo.address
                })
                wx.showToast({
                    title: '创建订单成功',
                    icon: 'none',
                })
            }
        }
    },

    judgeChange: function (e) {
        var gid = e.detail.value;
        var sumprice = this.data.sumprice;
        var list = this.data.productList;
        if (gid != '') {
            for (var i = 0; i < list.length; i++) {
                if (list[i].gid == gid) {
                    sumprice = sumprice + list[i].price + list[i].rent;
                }
            }
        } else {
            var gid = e.currentTarget.id;
            for (var i = 0; i < list.length; i++) {
                if (list[i].gid == gid) {
                    sumprice = sumprice - list[i].price - list[i].rent;
                }
            }
        }
        this.setData({
            sumprice: sumprice
        })
    },

    async getProductList() {
        let userId = app.globalData.userinfo.userId;

        if (userId == undefined) {
            wx.showModal({
                title: "未登录",
                content: "立即前往登录界面",
                success(res) {
                    if (res.confirm) {
                        wx.navigateTo({
                            url: '/pages/login/login',
                        })
                    } else if (res.cancel) {
                        wx.navigateBack()
                    }
                }
            })
            return
        }
        let result = await request('/wishList/getProductListByUserId', {
            userId
        })
        this.setData({
            productList: result.data
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.getProductList()
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