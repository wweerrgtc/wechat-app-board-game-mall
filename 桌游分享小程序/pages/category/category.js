import request from '../../utils/request'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selIndex: 0,
    categoryList: [{
        categoryId: 1,
        categoryName: '德式策略'
      },
      {
        categoryId: 2,
        categoryName: '卡牌游戏'
      },
      {
        categoryId: 3,
        categoryName: '美式扮演'
      }
      ,
      {
        categoryId: 4,
        categoryName: '聚会游戏'
      }
    ],
    productList: [],
    category: '经典棋牌'
  },
  /**
   * 分类点击事件
   */
  onMenuTab: function (e) {
    var index = e.currentTarget.dataset.index;

    this.setData({
      selIndex: index,
      category: this.data.categoryList[index].categoryName
    });
    this.updateCategoryList()
  },
  async updateCategoryList() {
    let category = this.data.category

    let result = await request('/goodsinfo/updateCategoryList', {
      category
    })
    console.log(result.data)
    this.setData({
      productList: result.data
    })
  },
  toProduct: function (event) {
    var gid = event.currentTarget.id;
    if (gid) {
      wx.navigateTo({
        url: '/pages/product/product?gid=' + gid,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.updateCategoryList()
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



  // 跳转搜索页
  toSearchPage: function () {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },


})