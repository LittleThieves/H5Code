import { GetSytemDateTimeTicks } from '../../fetch/api/user'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      message: '循环1',
      id: 1
    }, {
      message: '循环2',
      id: 2
    }]
  },

  // 请求demo
  handleClick(e) {
    const that = this
    GetSytemDateTimeTicks()
      .then(res => {
        const data = res
        console.log(data)
      })
  },

  // 带参数事件
  handleTipClick(e) {
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})