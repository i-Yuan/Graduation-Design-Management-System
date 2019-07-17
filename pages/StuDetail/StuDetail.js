// pages/StuDetail/StuDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:null,
    gpname:null,
    sname:null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id
    const db = wx.cloud.database()
    db.collection('gp').where({
      _id: id
    }).get({
      success: res => {
        this.setData({
          list: res.data[0],
          gpname:res.data[0].gpname
        })
        console.log('test', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },
  allow: function (event) {
    const db = wx.cloud.database()
    const order_id = event.currentTarget.id
    db.collection('afgp').add({
      data: {
        gpname:this.data.gpname,
        state:"0"
      },
      success: res => { this.refresh() },
      fail: err => {
        icon: 'none',
          console.error('[数据库] [更新记录] 失败：', err)
      }
    })
  },
  order: function () {
    wx.redirectTo({
      url: '../StuSelect/StuSelect',
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