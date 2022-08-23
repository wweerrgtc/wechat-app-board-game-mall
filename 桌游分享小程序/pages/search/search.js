import request from '../../utils/request'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotSearchList: [{title:"三国杀",content:"三国杀"},{title:"狼人杀",content:"狼人杀"}],
    prodName:"",
    productList:[]
    
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


  //点击搜素历史
  onHistSearch:function(e){
    var name = e.currentTarget.dataset.name;
    this.setData({
      prodName: name
    });
  },

    /**
     * 搜索提交
     */
  async searchbtn() {

    let prodName = this.data.prodName
      if (prodName.trim()) {

        let result = await request('/goodsinfo/search', {
          gname: prodName
        })
        this.setData({
          productList: result.data
        })
    }
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

 




//输入商品名获取数据 || 绑定输入值
  getSearchContent:function(e){
    this.setData({
      prodName: e.detail.value
    })
  }

})