import request from '../../utils/request'
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        fold: true,
        gid: '',
        product: '',
        isCollection: false,
        total: '',
        userId: '',
        price: '',
        rent: '',
        discount: ''
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
        let total = this.data.price + this.data.rent
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
    async addOrRemoveWishList() {
        if (!app.globalData.isLogin) {

            wx.showToast({
                title: '操作失败, 未登录',
                icon: 'none',
            })
            return
        }
        let isCollection = this.data.isCollection
        let gid = this.data.gid
        let userId = this.data.userId

        if (isCollection) {
            let gid = this.data.gid
            let userId = this.data.userId

            await request('/wishList/addOrRemoveWishByUserIdAndGid', {
                userId,
                gid
            })
            this.setData({
                isCollection: !this.data.isCollection
            })
            wx.showToast({
                title: '移除成功',
                icon: 'none',
            })
        } else {
            await request('/wishList/addOrRemoveWishByUserIdAndGid', {
                userId,
                gid
            })
            this.setData({
                isCollection: !this.data.isCollection
            })
            wx.showToast({
                title: '加入成功',
                icon: 'none',
            })
        }

    },

    showDescription() {
        this.setData({
            fold: !this.data.fold
        })
    },
    toPreviousPage() {
        wx.navigateBack()
    },
    toWishList() {
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
        setTimeout(function () {
            wx.navigateTo({
                url: '/pages/wishList/wishList',
            })
        }, 200)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var num = Math.random()
        num = num / 10 + 0.9
        num = num.toFixed(2)
        this.setData({
            gid: options.gid,
            discount: num
        })
        num = num * 100
        wx.showToast({
            title: '你获得了'+ num + '折优惠',
            icon: 'none',
        })
        this.getProduct()
    },

    async getProduct() {
        let gid = this.data.gid
        let discount = this.data.discount
        let result = await request('/goodsinfo/getProduct', {
            gid
        })
        this.setData({
            product: result.obj,
            price: Math.floor(result.obj.price * discount),
            rent: Math.floor(result.obj.rent * discount)
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
        this.setData({
            userId: app.globalData.userinfo.userId
        })
        this.isCollection()
    },
    async isCollection() {
        let userId = this.data.userId
        if (!app.globalData.isLogin) {
            return
        }
        let gid = this.data.gid
        let result = await request('/wishList/isCollection', {
            gid,
            userId
        })
        this.setData({
            isCollection: result.obj
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },
})