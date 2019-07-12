//index.js
//获取应用实例
Page({
  data: {
   
  },

  JumpToStu: function () {
    wx.navigateTo({
      url: '../StuSelect/StuSelect'
    })
  },
  JumpToTea: function () {
    wx.navigateTo({
      url: '../Teacher/Teacher'
    })
  },
  JumpToAdm: function () {
    wx.navigateTo({
      url: '../Admin/Admin'
    })
  }
  
})
