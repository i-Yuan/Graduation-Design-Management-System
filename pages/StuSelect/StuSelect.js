// pages/StuSelect/StuSelect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  JumpToDetial(event) {
    wx.navigateTo({
      url: '../StuDetail/StuDetail?id=' + event.currentTarget.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    db.collection('gp').get({
      success: res => {
        this.setData({
          list: res.data
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    }),
      console.log(getApp().globalData.openid)


    db.collection('stu').where({
      _openid: getApp().globalData.openid
    }).get({
      success: res => {
        if (res.data.length === 0) {
          wx.navigateTo({
            url: '../register/register',
          })
        } else {
          getApp().globalData.sname = res.data[0].sname
          getApp().globalData._id = res.data[0]._id
          getApp().globalData.tel = res.data[0].tel
        }
        console.log('[数据库] [查询记录] 成功: ', res)
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



  moveToDetail(event) {
    const db = wx.cloud.database()
    db.collection('stu').where({
      _openid: getApp().globalData.openid
    }).get({
      success: res => {
        if (res.data.length === 0) {
          wx.navigateTo({
            url: '../register/register',
          })
        } else {
          wx.navigateTo({
            url: '../StuDetail/StuDetail' + '?sname=' + event.currentTarget.id,
          })
        }
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
      }
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