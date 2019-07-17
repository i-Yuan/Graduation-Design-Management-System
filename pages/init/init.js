// miniprogram/pages/init/init.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    logged: false,
    takeSession: false,
    requestResult: '',
    sname: '',
    student_number: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  

    const db = wx.cloud.database()
    const cloud = require('wx-server-sdk')
    // 查询当前用户所有的 counters
    db.collection('stu').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        if (res.data.length === 0)
          console.log('请注册')
        else {
          console.log('[数据库] [查询记录] 成功: ', res)
          wx.navigateTo({
            url: '../StuSelect/StuSelect',
          })
        }
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

  },

  regeist: function(e) {
    sname = e.value.sname,
    _id = e.value._id
    const db = wx.cloud.database()
    db.collection('stu').add({
      data: {
        sname: sname,
        _id: _id
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id

        wx.showToast({
          title: '注册成功',
        })
        wx.navigateTo({
          url: '',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  }

})